# Overview

Boxbilling is a free billing & client management software

Affected versions of this software are vulnerable to Cross-site Scripting (XSS). It is possible to inject JavaScript with object decoding such as `<script>alert(1)</script>` resulting in XSS.

# Technical Description

if we look in `src/bb-modules/Support/html_client` file we do find the following javascript code which is responsible for making the API request. The javascript serialize the input fields and send a post request to `example.com/index.php?_url=/api/client/support/ticket_create`

```javacript
<script type="text/javascript">
$(function() {
    $('#ticket-submit').bind('submit',function(event){
        $('.wait').show();
        bb.post(
            'client/support/ticket_create',
            $(this).serialize(),
            function(result) {
                bb.redirect('{{ 'support/ticket'|link }}' + '/' + result);
            }
        );
        return false;
    });
```

The request is received by `ticket_create` function in `/src/bb-modules/Support/Api/Client.php`. The only check in this function exists is for the required parameters. 

```php
public function ticket_create($data)
    {
        $required = array(
            'content'             => 'Ticket content required',
            'subject'             => 'Ticket subject required',
            'support_helpdesk_id' => 'Ticket support_helpdesk_id required',
        );
        $this->di['validator']->checkRequiredParamsForArray($required, $data);

        $helpdesk = $this->di['db']->getExistingModelById('SupportHelpdesk', $data['support_helpdesk_id'], 'Helpdesk invalid');

        $client = $this->getIdentity();

        return $this->getService()->ticketCreateForClient($client, $helpdesk, $data);
    }
```

Once it verifies that the provided data contains the required parameters, it combine the request with _client identity_ and _helpdesk id_ and sends its request to `ticketCreateForClient` function in `src/bb-modules/support/service.php`

```php

...
...
        $ticket                      = $this->di['db']->dispense('SupportTicket');
        $ticket->client_id           = $client->id;
        $ticket->subject             = $data['subject'];
        $ticket->support_helpdesk_id = $helpdesk->id;
        $ticket->created_at          = date('Y-m-d H:i:s');
        $ticket->updated_at          = date('Y-m-d H:i:s');

        // related task with ticket
        $ticket->rel_id        = $rel_id;
        $ticket->rel_type      = $rel_type;
        $ticket->rel_task      = $rel_task;
        $ticket->rel_new_value = $rel_new_value;
        $ticket->rel_status    = $rel_status;

        $ticketId = $this->di['db']->store($ticket);

        $this->messageCreateForTicket($ticket, $client, $data['content']);

...
    }
```

It stores the subject and other ticket info in `support_ticket` table in database and sends the `content` to `messageCreateForTicket` function. 

```php
    public function messageCreateForTicket(\Model_SupportTicket $ticket, $identity, $content)
    {
        $msg                    = $this->di['db']->dispense('SupportTicketMessage');
        $msg->support_ticket_id = $ticket->id;
        if ($identity instanceof \Model_Admin) {
            $msg->admin_id = $identity->id;
        } elseif ($identity instanceof \Model_Client) {
            $msg->client_id = $identity->id;
        } else {
            throw new \Box_Exception('Identity is not valid');
        }
        $msg->content    = $content;
        $msg->ip         = $this->di['request']->getClientAddress();
        $msg->created_at = date('Y-m-d H:i:s');
        $msg->updated_at = date('Y-m-d H:i:s');

        return $this->di['db']->store($msg);
    }
```

The function basically stores the `content` value (which is the ticket body) in `support_ticket_message` table in the database! which makes it stored cross-site scripting