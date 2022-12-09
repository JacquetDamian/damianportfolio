const $form= document.querySelector("#form");
const $buttonMailto = document.querySelector('#mailto')

$form.addEventListener('submit', handleSubmit);

function handleSubmit (event) {
    event.preventDefault();
    const form = new FormData(this);
    console.log(form.get('name'));
    $buttonMailto.setAttribute('href', `mailto:damianjacquet9@gmail.com?subject${form.get('name')}${form.get('email')}&body=${form.get('message')}`);
    $buttonMailto.click();
}

$(function(){

    $(".header__navbar").hide();

    $(".header__btnmenu").click(function(){
        
        let navBar = $(".header__navbar").toggle();

    });

$(function(){

    $("#helpAlert").click(function(){
        alert("Cualquier duda o consulta que tengas podes comunicarte por nuestras redes o clickeando en el boton de contacto! Vamos a estar dispuestos a ayudarte en lo que necesites!")
    })

})

});
