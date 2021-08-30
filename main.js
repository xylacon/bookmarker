let projects = document.getElementById('projects');
let skills = document.getElementById('skills');
let education = document.getElementById('education');
let workExp = document.getElementById('work-exp');

projects.childNodes[1].addEventListener('click', changeDisplay);
skills.childNodes[1].addEventListener('click', changeDisplay);
education.childNodes[1].addEventListener('click', changeDisplay);
workExp.childNodes[1].addEventListener('click', changeDisplay);

let allContent = document.getElementsByClassName('content');
let allParent = document.getElementsByTagName('section');
window.addEventListener('resize', () =>
{
	if (window.innerWidth >= 500)
	{
		for (i = 0; i < allContent.length; i++)
		{
			allContent[i].style.display = 'block';
		}
		for (i = 0; i < allParent.length; i++)
		{
			allParent[i].style.boxShadow = 'none';
		}
	}
	else
	{
		if ((allContent[1].style.display == 'block') && (allContent[2].style.display == 'block'))
		{
			for (i = 0; i < allContent.length; i++)
			{
				allContent[i].style.display = 'none';
			}
		}
	}
});

function changeDisplay(e)
{
	if (window.innerWidth >= 500)
	{
		return;
	}
	
	let content = e.target.nextElementSibling;
	let allContent = document.getElementsByClassName('content');
	let allParent = document.getElementsByTagName('section');

	if (content.style.display === '' || content.style.display === 'none')
	{
		for (i = 0; i < allContent.length; i++)
		{
			allContent[i].style.display = 'none';
		}
		for (i = 0; i < allParent.length; i++)
		{
			allParent[i].style.boxShadow = 'none';
		}
		content.style.display = 'block';
		content.parentNode.style.boxShadow = 'inset 0 0 4px black';
	}
	else
	{
		content.style.display = 'none';
		content.parentNode.style.boxShadow = 'none';
	}
}