export const siteView = ({ employees, translations, jobs }) => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<link rel="stylesheet" type="text/css" href="main.css" />	
	<title>Info Site</title>
</head>
<body>
<h1>Info Site</h1>	
<h2>There are ${employees.length} employees</h2>	
<ul>
	${employees.map((employee) => `<li>${employee.lastName}</li>`).join("")}
</ul>
<h2>Images</h2>
<img src="images/code.png"/>
<h2>There are ${jobs.length} jobs</h2>	
<div class="jobs">
	${jobs
    .map((job) => {
      return `<div class="job">${job.html}</div>`;
    })
    .join("")}
</div>
<h2>There are ${translations.length} translations</h2>	
<ul>
	${translations
    .map((translation) => `<li>${translation.fromPhrase}</li>`)
    .join("")}
</ul>
</body>
</html>
	`;
};
