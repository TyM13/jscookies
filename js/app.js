function cookie (details) {
Cookies.set(`button_clicked`, `yes`)
}

let cookie_but = document.getElementById(`cookie_button`);
cookie_but.addEventListener(`click`, cookie)
 let cookiez = Cookies.get(`button_clicked`)
 if(cookiez !== undefined) {
     document.body.insertAdjacentHTML(`afterEnd`, `<h1>you baked a cookie</h1>`)
 }










