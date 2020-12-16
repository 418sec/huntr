**Description
     js-year-calendar is an open source calendar widget. XSS can be executed using the Name input area in the Event form section.
     
**POC
     Go to https://year-calendar.github.io/js-year-calendar/examples scroll to Complete example, tap any date and the Event form will appear. Enter 
     <script>alert('XSS')</script>
     in the text box labeled Name. Click Save. Tap the date where the XSS "event" was entered an alert will appear.
