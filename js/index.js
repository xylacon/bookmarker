function changeSize(){var e=window.innerHeight;document.documentElement.style.setProperty("--vh",e+"px")}function changeTheme(){window.matchMedia("(prefers-color-scheme: dark)").matches?(document.documentElement.setAttribute("data-theme","dark"),document.querySelector('meta[name="theme-color"]').setAttribute("content","rgb(18, 18, 20)")):(document.documentElement.setAttribute("data-theme","light"),document.querySelector('meta[name="theme-color"]').setAttribute("content","rgb(255, 255, 255)"))}function sendEmail(){window.open("mailto:rddenton98@gmail.com")}changeSize(),changeTheme(),window.addEventListener("resize",changeSize),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",changeTheme);