let projects = document.getElementById('projects');
let skills = document.getElementById('skills');
let education = document.getElementById('education');
let workExp = document.getElementById('work-exp');

projects.childNodes[1].addEventListener('click', changeDisplay);
skills.childNodes[1].addEventListener('click', changeDisplay);
education.childNodes[1].addEventListener('click', changeDisplay);
workExp.childNodes[1].addEventListener('click', changeDisplay);

function changeDisplay(e)
{
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

// function changeFont()
// {
// 	if (document.body.style.fontFamily === '' || document.body.style.fontFamily === 'Ubuntu')
// 	{
// 		document.body.style.fontFamily = 'Quicksand';
// 	}
// 	else
// 	{
// 		document.body.style.fontFamily = 'Ubuntu';
// 	}
// }

let x = 0;
function changeColor()
{
	themeTransition();
	let numThemes = ['yellow', 'blue', 'red', 'multi'];

	if ((x + 1) >= numThemes.length)
	{
		x = 0;
	}
	else
	{
		x++;
	}

	document.documentElement.setAttribute('data-theme', numThemes[x]);
}

function themeTransition()
{
    document.documentElement.classList.add("transition");
    window.setTimeout(() => document.documentElement.classList.remove("transition"), 1000);
}