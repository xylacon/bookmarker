function changeTheme() {
	let dark = window.matchMedia("(prefers-color-scheme: dark)").matches

	if (dark) {
		document.documentElement.setAttribute("data-theme", "dark")
		document.querySelector('meta[name="theme-color"]').setAttribute("content", "rgb(18, 18, 20)")
	} else {
		document.documentElement.setAttribute("data-theme", "light")
		document.querySelector('meta[name="theme-color"]').setAttribute("content", "rgb(255, 255, 255)")
	}
}

function sendEmail() {
	window.open("mailto:xylacon@gmail.com")
}

changeTheme()
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", changeTheme)