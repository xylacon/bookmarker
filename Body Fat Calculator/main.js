var height = document.getElementById('height');
var abdomen = document.getElementById('abdomen');
var neck = document.getElementById('neck');

var heightVal;
var abdomenVal;
var neckVal;
var bodyFatA;

// Event Listeners
document.querySelectorAll('.description').forEach(i =>
	{
		i.addEventListener('click', openPanel)
	});
document.getElementById('methods').querySelectorAll('.card-item').forEach(i =>
	{
		i.addEventListener('click', updateMethods)
	});
document.querySelectorAll('.input').forEach(i =>
	{
		i.addEventListener('keyup', updateVal)
	});

// Functions
function updateVal()
{
	heightVal = height.value;
	abdomenVal = abdomen.value;
	neckVal = neck.value;

	if ((heightVal.length /= 0) && (abdomenVal.length /= 0) && (neckVal.length /= 0))
	{
		hodgdonBeckett();
	}

	// at the end, call a function that will check the values of all bodyFats and deal with greying them out on the DOM
}

function openPanel(e)
{
	let panel = e.target.closest('.panel');
	let icon = panel.getElementsByTagName('i')[0];
	let card = panel.getElementsByClassName('card')[0];
	let cardItem = card.getElementsByClassName('card-item');

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
	let method = e.target.closest('.card-item');
	let icon = method.getElementsByTagName('i')[0];

	if (method.classList.contains('checked'))
	{
		method.classList.remove('checked');
		icon.className = '';
		icon.className = 'far fa-square';
	}
	else
	{
		method.classList.add('checked');
		icon.className = '';
		icon.className = 'fas fa-check-square';
	}
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
	
	bodyFatA = 86.010 * Math.log10(abdomenVal - neckVal) - 70.041 * Math.log10(heightVal) + 36.76;

	console.log(bodyFatA);
}
