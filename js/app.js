function cookie (details) {
Cookies.set(`button_clicked`, `yes`)
}
function delete_cookie (details) {
     Cookies.remove(`button_clicked`); 
}

let cookie_but = document.getElementById(`cookie_button`);
cookie_but.addEventListener(`click`, cookie)
 let cookiez = Cookies.get(`button_clicked`)
 if(cookiez !== undefined) {
     document.body.insertAdjacentHTML(`afterEnd`, `<h1>you baked a cookie</h1>`)

 }




let dont_click = document.getElementById(`second_button`);
dont_click.addEventListener(`click`, delete_cookie )







