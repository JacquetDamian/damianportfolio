/* const $form= document.querySelector("#form");
const $buttonMailto = document.querySelector('#mailto')

$form.addEventListener('submit', handleSubmit);

function handleSubmit (event) {
    event.preventDefault();
    const form = new FormData(this);
    console.log(form.get('name'));
    $buttonMailto.setAttribute('href', `mailto:damianjacquet9@gmail.com?subject${form.get('name')}${form.get('email')}&body=${form.get('message')}`);
    $buttonMailto.click();
} */

const menu = document.querySelector("#menu");

const btnMenu = document.querySelector("#btnMenu");

let mostrar = btnMenu.addEventListener("click", function(){
    menu.classList.toggle("mostrar");
    btnMenu.classList.toggle("mostrarBtn");
});