## Description
The application is vulnerable to URL Open Redirect. During the review, it was observed that the application passes incoming user input from POST request directly into redirect method.

## POC

```
public function language() {
		if (isset($this->request->post['code']) && is_dir(DIR_LANGUAGE . basename($this->request->post['code']))) {
			$this->session->data['language'] = $this->request->post['code'];
		}

		if (isset($this->request->post['redirect'])) {
			$this->response->redirect($this->request->post['redirect']);
		} else {
			$this->response->redirect($this->url->link('install/step_1'));
		}
	}	
}
```
