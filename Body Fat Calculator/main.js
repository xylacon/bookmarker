// Global variables
var age = document.getElementById('age');
var height = document.getElementById('height');
var waist = document.getElementById('waist');
var hip = document.getElementById('hip');
var thigh = document.getElementById('thigh');
var upperArm = document.getElementById('upper-arm');
var forearm = document.getElementById('forearm');
var calf = document.getElementById('calf');
var neck = document.getElementById('neck');

var sexVal;
var ageVal;
var heightVal;
var waistVal;
var hipVal;
var thighVal;
var upperArmVal;
var forearmVal;
var calfVal;
var neckVal;
var bodyFatA;
var bodyFatB;

const allMethods = Array.from(document.getElementById('methods').getElementsByTagName('div'));
var activeMethods = [];

updateMethodArray();

// Event Listeners
document.getElementById('result-panel').addEventListener('click', showResults);
document.querySelectorAll('.description').forEach(i =>
	{
		i.addEventListener('click', openPanel)
	});
document.getElementById('methods').querySelectorAll('.card-item').forEach(i =>
	{
		i.addEventListener('click', updateMethods)
	});
document.getElementById('basic-info').querySelectorAll('.card-item').forEach(i =>
	{
		i.addEventListener('click', updateGender)
	});
document.querySelectorAll('.input').forEach(i =>
	{
		i.addEventListener('keyup', updateVal)
	});

// Functions
function updateVal()
{
	ageVal = age.value;
	heightVal = height.value;
	waistVal = waist.value;
	hipVal = hip.value;
	thighVal = thigh.value;
	upperArmVal = upperArm.value;
	forearmVal = forearm.value;
	calfVal = calf.value;
	neckVal = neck.value;

	// if ((heightVal.length /= 0) && (abdomenVal.length /= 0) && (neckVal.length /= 0))
	// {
	// 	hodgdonBeckett();
	// }
	hodgdonBeckett();
	katchMcardle();

	// at the end, call a function that will check the values of all bodyFats and deal with greying them out on the DOM
}

function showResults(e)
{
	const panel = e.target.closest('#result-panel');
	const items = panel.getElementsByClassName('item');
	const average = document.getElementById('average');
	const averageTitle = document.getElementById('average-title');

	if (panel.classList.contains('active'))
	{
		panel.classList.remove('active');
		panel.style.clipPath = 'circle(15% at 50% 14%)';
		panel.style.overflow = 'hidden';
		panel.style.backgroundColor = 'var(--circle)';
		for (item of items)
		{
			item.style.fontSize = '1em';
			item.style.color = 'rgba(0, 0, 0, 0)';
			item.style.borderTop = 'none';
		}
		average.style.marginTop = '20px';
		average.style.alignSelf = 'center';
		average.style.fontSize = '24px';
		average.style.color = 'var(--bg)';
		averageTitle.style.color = 'rgba(0, 0, 0, 0)';
	}
	else
	{
		panel.classList.add('active');
		panel.style.clipPath = 'circle(75%)';
		panel.style.overflow = 'scroll';
		panel.style.overflowX = 'hidden';
		panel.style.overflowY = 'auto';
		panel.style.backgroundColor = 'rgba(190, 190, 190, 0.5)';
		for (item of items)
		{
			item.style.fontSize = 'inherit';
			item.style.color = 'inherit';
			item.style.borderTop = '1px solid rgba(0, 0, 0, 0.3)';
		}
		average.style.margin = '0';
		averageTitle.style.color = 'inherit';
	}
}

function openPanel(e)
{
	const panel = e.target.closest('.panel');
	const icon = panel.getElementsByTagName('i')[0];
	const card = panel.getElementsByClassName('card')[0];
	const cardItem = card.getElementsByClassName('card-item');

	if (panel.classList.contains('active'))
	{
		panel.classList.remove('active');
		icon.style.transform = 'none';
		card.style.opacity = '0';
		card.style.fontSize = '0';
		card.style.padding = '0';
		for (item of cardItem)
		{
			item.style.padding = '0';
		}
	}
	else
	{
		panel.classList.add('active');
		icon.style.transform = 'rotate(90deg)';
		card.style.opacity = '1';
		card.style.fontSize = 'inherit';
		card.style.padding = '5px 10px';
		for (item of cardItem)
		{
			item.style.padding = '5px 10px';
		}
	}
}

function updateMethods(e)
{
	let currentMethods = allMethods;
	const method = e.target.closest('.card-item');
	const icon = method.getElementsByTagName('i')[0];
	const all = document.getElementById('all');

	if (method.classList.contains('checked'))
	{
		if (method.dataset.value == 'all')
		{
			currentMethods.forEach((item) =>
			{
				item.classList.remove('checked');
				item.getElementsByTagName('i')[0].className = '';
				item.getElementsByTagName('i')[0].className = 'far fa-square';
			});
		}
		else
		{
			method.classList.remove('checked');
			icon.className = '';
			icon.className = 'far fa-square';
		}
	}
	else
	{
		if (method.dataset.value == 'all')
		{
			currentMethods.forEach((item) =>
			{
				item.classList.add('checked');
				item.getElementsByTagName('i')[0].className = '';
				item.getElementsByTagName('i')[0].className = 'fas fa-check-square';
			});
		}
		else
		{
			method.classList.add('checked');
			icon.className = '';
			icon.className = 'fas fa-check-square';
		}
	}

	currentMethods = currentMethods.filter(item => item.classList.contains('checked') && item.dataset.value != 'all');

	if ((currentMethods.length + 1) < allMethods.length)
	{
		all.classList.remove('checked');
		all.getElementsByTagName('i')[0].className = '';
		all.getElementsByTagName('i')[0].className = 'far fa-square';
	}
	else
	{
		all.classList.add('checked');
		all.getElementsByTagName('i')[0].className = '';
		all.getElementsByTagName('i')[0].className = 'fas fa-check-square';
	}

	updateMethodArray();
}

function updateMethodArray()
{
	activeMethods = [];
	let methods = allMethods;
	methods = methods.filter(item => item.classList.contains('checked') && item.dataset.value != 'all');
	methods.forEach((item) => activeMethods.push(item.dataset.value));
}

function updateGender(e)
{
	const radioButton = e.target.closest('.card-item');
	const icon = radioButton.querySelector('.circle-sm');
	const male = document.getElementById('male');
	const female = document.getElementById('female');
	
	if (radioButton.dataset.value == male.dataset.value)
	{
		sexVal = male.dataset.value;
	}
	if (radioButton.dataset.value == female.dataset.value)
	{
		sexVal = female.dataset.value;
	}

	male.querySelector('.circle-sm').style.padding = '8px';
	female.querySelector('.circle-sm').style.padding = '8px';

	icon.style.padding = '4px';
}

function checkValues(bodyFat)
{
	if (isNaN(bodyFat) || !isFinite(bodyFat))
	{
		bodyFat = 0;
	}

	return bodyFat;
}

// Method Calculations
function hodgdonBeckett()
{
	bodyFatA = 0;
	
	if (sexVal == 'male')
	{
		bodyFatA = 86.010 * Math.log10(waistVal - neckVal) - 70.041 * Math.log10(heightVal) + 36.76;
	}
	if (sexVal == 'female')
	{
		console.log(bodyFatA);
		bodyFatA = 163.205 * Math.log10(waistVal + hipVal - neckVal) - 97.684 * Math.log10(heightVal) - 78.387;
	}

	console.log(bodyFatA);
}

function katchMcardle()
{
	bodyFatB = 0;
	
	if (sexVal == 'male')
	{
		if ((ageVal >= 17) && (ageVal <= 26))
		{
			bodyFatB = (upperArmVal * 1.34) + (thigh * 2.08) - (forearm * 4.31) - 19.6;
		}
		if (ageVal > 26)
		{
			bodyFatB = (waist * 1.19) + (thigh * 1.24) - (calf * 1.45) - 18.4;
		}
	}
	if (sexVal == 'female')
	{
		if ((ageVal >= 17) && (ageVal <= 26))
		{
			bodyFatB = (waistVal * 1.34) + (thighVal * 2.08) - (forearmVal * 4.31) - 19.6;
		}
		if (ageVal > 26)
		{
			bodyFatB = (waistVal * 1.19) + (thighVal * 1.24) - (calfVal * 1.45) - 18.4;
		}
	}

	// console.log(bodyFatB);
}
