//creacion de array con elementos p creados con document.createElement
const error = [document.createElement("p"), document.createElement("p"),
    document.createElement("p"), document.createElement("p")];
//creacion de array con las listas dnd se encuentran las li dnd se les agregara el p con el error y se utilizara para sacar los valores del input
const formLi=[document.getElementById("liNombre"),document.getElementById("liEmail"),
    document.getElementById("liTel"),document.getElementById("liMsg")];
//obtencion del elemnto confirmacion que se mostrara cuando el form sea llenado de manera correcta y enviado
const formConfimacion = document.getElementById("confirmacion-formulario")
//creacion de array con elementos li dnd se insertaran los valores obtenidpo luego de hbaer enviado correctamente el formulario
const arrayConfirmacion = [document.getElementById("confirmacion-formulario__nombre"), document.getElementById("confirmacion-formulario__email")
    , document.getElementById("confirmacion-formulario__tel"), document.getElementById("confirmacion-formulario__msg")];
//obtencion del elemnto form
const form = document.getElementById("formu");
//obtencion de los iconos ok
const okIcon = document.getElementsByClassName("fa-circle-check");
//obtencion de los iconos wrong
const wrongIcon = document.getElementsByClassName("fa-circle-xmark");
//creacion de banderas para confirmar que el formulario se lleno correctamente y se pueda enviar el formu
let flags= [flag1=false,flag2= false,flag3= false,flag4 = false];

//agregado de la clase error a los elementos p creados
formLi.forEach(x=> {
    x.classList.add("error");
})
//setiando un array con los mensejes de error
const errorMsg = [
    "El nombre no puede superara los 30 caracteres",
    "Ingrese un mail correcto",
    "Ingrese un numero correcto",
    "El mensaje no puede superara los 300 caracteres",
    "El campo no puede estar vacio"
];
//funcion que se ejecuta si lo verificado es correcto y setea el css para campo correcto
let verificationOk = (i) => {
    flags[i] = true;
    error[i].innerText = "";
    wrongIcon[i].style.opacity = "0";
    okIcon[i].style.opacity = "1";

};
//funcion que se ejecuta algun campo esta vacio y setea el css a default y mensaje para avisar q esta vacio
let verificationEmpty = (x, o) => {

    formLi.forEach((element, i) => {
        if (element.firstElementChild.value === "") {
            okIcon[i].style.opacity = "0";
            wrongIcon[i].style.opacity = o;
            error[i].innerHTML = x;
            formLi[i].appendChild(error[i]);
            console.log(error[i].innerText);
            console.log(x);
            formLi[i].firstElementChild.classList.remove("borderError");
        }
    });
};
//funcion que se ejecuta si lo verificado es incorrecto y setea el css para campo incorrecto
let verificationWrong = (i) => {
    flags[i] = false;
    error[i].innerHTML = errorMsg[i];
    formLi[i].appendChild(error[i]);
    wrongIcon[i].style.opacity = "1";
    okIcon[i].style.opacity = "0";

};
 //evento para escuchar cualquier cambio q se realice en el formulario y utilizar la funcion adecuada
form.addEventListener("change", (e) => {

    for (let i = 0; i < 3; i++) {

        if (formLi[i].firstElementChild.value.length > 30) {
            verificationWrong(i);
            formLi[i].firstElementChild.classList.add("borderError");
        } else {
            verificationOk(i);
            formLi[i].firstElementChild.classList.remove("borderError");
        }
    }
    if (isNaN(formLi[2].firstElementChild.value) || formLi[2].firstElementChild.value.length < 8 || formLi[2].firstElementChild.value.length > 20) {
        verificationWrong(2);
        formLi[2].firstElementChild.classList.add("borderError");
    } else {
        verificationOk(2);
        formLi[2].firstElementChild.classList.remove("borderError");
    }

    if (!formLi[1].firstElementChild.value.includes("@") ||
        !formLi[1].firstElementChild.value.includes(".com")
    ) {
        verificationWrong(1);
        formLi[1].firstElementChild.classList.add("borderError");
    } else {
        verificationOk(1);
        formLi[1].firstElementChild.classList.remove("borderError");
    }
    if (formLi[3].firstElementChild.value.length > 300) {
        verificationWrong(3);
        formLi[3].firstElementChild.classList.add("borderError");
    } else {

        verificationOk(3);
        formLi[3].firstElementChild.classList.remove("borderError");
    }
    let x = "";
    formLi.forEach((element, i) => {
        if (element.firstElementChild.value === "") {
            okIcon[i].style.opacity = "0";
            wrongIcon[i].style.opacity = "0";
            error[i].innerText = x;
            flags[i] = false;

        }
    });
    verificationEmpty(x, 0);
});
//evento para subit del formulario, setiado en e.preventDefault para q nunca se largue ya que todavia no esta hecho el backend en php
//si el formulario es correcto se oculta el formulario y se descoulta un div que mustra mensaje enviado y los datos del formulario
form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!flags[0]||!flags[1]||!flags[2]||!flags[3]) {

        verificationEmpty(errorMsg[4], 1);
         return false;

    } else {
        for (let i = 0; i < formLi.length; i++) {
            let labelName="";
            switch (i) {
                case 0:
                    labelName = "<b>Nombre: </b>";
                    break;
                case 1:
                    labelName = "<b>Email: </b>";
                    break;
                case 2:
                    labelName = "<b>Telefono: </b>";
                    break;
                case 3:
                    labelName = "<b>Mensaje: </b>";
                    break;
            }
            arrayConfirmacion[i].innerHTML = labelName + formLi[i].firstElementChild.value;
                
            form.classList.add("hiddenForm");
            formConfimacion.classList.remove("hiddenForm");
        }

    }

});
