document.getElementById('new').addEventListener('submit', saveBookmark);		// Listen for form submit

function saveBookmark(e)
{
	e.preventDefault();		// Prevent form from submitting

	var siteName = document.getElementById('new-name').value;
	var siteUrl = document.getElementById('new-url').value;
	var bookmark =
	{
		name: siteName,
		url: siteUrl
	}

	if(localStorage.getItem('bookmarks') === null)		// If there are no bookmarks...
	{
		var bookmarks = [];
		bookmarks.push(bookmark);
		localStorage.setItem('bookmarks', JSON.stringify(bookmarks))
	}
	else		// If there are bookmarks...
	{
		var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
		bookmarks.push(bookmark);
		localStorage.setItem('bookmarks', JSON.stringify(bookmarks))
	}

	document.getElementById('new').reset();		// Clear form fields

	displayBookmarks();
}

function deleteBookmark(url)
{
	var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

	for(var i = 0; i < bookmarks.length; i++)
	{
		if(bookmarks[i].url == url)
		{
			bookmarks.splice(i, 1);
		}
	}

	localStorage.setItem('bookmarks', JSON.stringify(bookmarks))
	displayBookmarks();
}

function displayBookmarks()
{
	var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
	var display = document.getElementById('bookmarks');
	
	display.innerHTML = '';
	for(var i = 0; i < bookmarks.length; i++)
	{
		var name = bookmarks[i].name;
		var url = bookmarks[i].url;

		display.innerHTML +=
		`
			<div class="bookmark">
				<span>${name}</span><a class="btn visit" target="_blank" href="${url}">Visit</a><a onclick="deleteBookmark('${url}')" class="btn delete" href="#">Delete</a>
			</div>
		`;
	}
}