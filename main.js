var projects = document.getElementById('projects');
var skills = document.getElementById('skills');
var education = document.getElementById('education');
var workExp = document.getElementById('work-exp');

projects.childNodes[1].addEventListener('click', changeDisplay);
skills.childNodes[1].addEventListener('click', changeDisplay);
education.childNodes[1].addEventListener('click', changeDisplay);
workExp.childNodes[1].addEventListener('click', changeDisplay);

function changeDisplay(e)
{
	var content = e.target.nextElementSibling;
	var allContent = document.getElementsByClassName('content');

	if (content.style.display === '' || content.style.display === 'none')
	{
		for (i = 0; i < allContent.length; i++)
		{
			allContent[i].style.display = 'none';
		}
		content.style.display = 'block';
	}
	else
	{
		content.style.display = 'none';
	}
}