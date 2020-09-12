## Description
The application is vulnerable to URL Open Redirect. During the review, it was observed that the application passes incoming user input from POST request directly into redirect method in \upload\admin\controller\common\login.php file at line no: 18. Though the application has verification at place, which could be bypassed.
Other locations were also identified vunerable to this attack.
##### File- upload\install\controller\common\column_left.php: 67


## POC
#### Instance 1:
```
lass ControllerCommonLogin extends Controller {
	private $error = array();
	public function index() {
		$this->load->language('common/login');
		$this->document->setTitle($this->language->get('heading_title'));
		if ($this->user->isLogged() && isset($this->request->get['user_token']) && ($this->request->get['user_token'] == $this->session->data['user_token'])) {
			$this->response->redirect($this->url->link('common/dashboard', 'user_token=' . $this->session->data['user_token']));
		}
		if (($this->request->server['REQUEST_METHOD'] == 'POST') && $this->validate()) {
			$this->session->data['user_token'] = token(32);
			
			if (isset($this->request->post['redirect']) && (strpos($this->request->post['redirect'], HTTP_SERVER) === 0)) {
				$this->response->redirect($this->request->post['redirect'] . '&user_token=' . $this->session->data['user_token']);
			} else {
				$this->response->redirect($this->url->link('common/dashboard', 'user_token=' . $this->session->data['user_token']));
			}
		}
```


#### Instance 2:
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

