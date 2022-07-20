function cookie (details) {
Cookies.set(`button_clicked`, `yes`)
}

let cookie_but = document.getElementById(`cookie_button`);
cookie_but.addEventListener(`click`, cookie)