document.getElementById("btn__registrarse").addEventListener("click", register);
document.getElementById("btn__iniciar sesion").addEventListener("click", iniciarSesion);
window.addEventListener("resize", anchoPagina);


//declaración de variables
var contenerdor__login_register = document.querySelector(".contenerdor__login_register");
var formulario__login = document.querySelector(".formulario_login");
var formulario__register = document.querySelector(".formulario_register");
var caja_trasera_login = document.querySelector(".caja__trasera-login");
var caja_trasera_register = document.querySelector(".caja__trasera-register");


function anchoPagina() {
    if (window, innerWidth > 850) {
        caja_trasera_login.style.display = "block";
        caja_trasera_register.style.display = "block";
    } else {
        caja_trasera_register.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.display = "none";
        formulario__login.style.display = "block";
        formulario__register.style.display = "none";
        contenerdor__login_register.style.left = "0px";
    }
}

anchoPagina();

function iniciarSesion() {
    if (window, innerWidth > 850) {
        formulario_register.style.display = "none";
        contenerdor__login_register.style.left = "10px";
        formulario__login.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.opacity = "0";
    } else {
        formulario_register.style.display = "none";
        contenerdor__login_register.style.left = "0px";
        formulario__login.style.display = "block";
        caja_trasera_register.style.display = "block";
        caja_trasera_login.style.display = "none";
    }

    function register() {

        if (window, innerWidth > 850) {
            formulario_register.style.display = "block";
            contenerdor__login_register.style.left = "410px";
            formulario__login.style.display = "none";
            caja_trasera_register.style.opacity = "0";
            caja_trasera_login.style.opacity = "1";
        } else {
            formulario_register.style.display = "block";
            contenerdor__login_register.style.left = "0px";
            formulario__login.style.display = "none";
            caja_trasera_register.style.display = "none";
            caja_trasera_login.style.display = "block";
            caja_trasera_login.styly.opacity = "1";
        }
    }
}