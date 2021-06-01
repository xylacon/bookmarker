const search = document.getElementById('search');
const matchList = document.getElementById('match-list');

// Search states.json and filter it
const searchStates = async searchText =>
{
	const res = await fetch('states.json');
	const states = await res.json(0);

	// Get matches for current text input
	let matches = states.filter(state =>
		{
			const regex = new RegExp(`^${searchText}`, 'gi');
			return state.name.match(regex) || state.abbr.match(regex);
		});
	
	if(searchText.length === 0)
	{
		matches = [];
		matchList.innerHTML = '';
	}

	outputHtml(matches)
}

// Show results in HTML
const outputHtml = matches =>
{
	if(matches.length > 0)
	{
		const html = matches
		.map(match =>
			`
				<div class="card">
					<div>${match.name} (${match.abbr}) <span class="text-primary">${match.capital}</span></div>
					<small>Lat: ${match.lat} / Long: ${match.long}</small>
				</div>
			`)
		.join('');
		
		matchList.innerHTML = html;	
	}
}

// Main
search.addEventListener('input', () => searchStates(search.value));
