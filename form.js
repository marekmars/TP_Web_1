//creacion de array con elementos p creados con document.createElement
const error = [document.createElement("p"), document.createElement("p"),
    document.createElement("p"), document.createElement("p")];
//creacion de array con las listas dnd se encuentran las li dnd se les agregara el p
const formLi=[document.getElementById("liNombre"),document.getElementById("liEmail"),
    document.getElementById("liTel"),document.getElementById("liMsg")];
const formConfimacion = document.getElementById("confirmacion-formulario")
const arrayConfirmacion = [document.getElementById("confirmacion-formulario__nombre"), document.getElementById("confirmacion-formulario__email")
    , document.getElementById("confirmacion-formulario__tel"), document.getElementById("confirmacion-formulario__msg")];
const arrayForm = [document.getElementById("name"), document.getElementById("email"),
    document.getElementById("phone"), document.getElementById("msg")];
const form = document.getElementById("formu");
const okIcon = document.getElementsByClassName("fa-circle-check");
const wrongIcon = document.getElementsByClassName("fa-circle-xmark");

let flags= [flag1=false,flag2= false,flag3= false,flag4 = false];


formLi.forEach(x=> {
    x.classList.add("error");
})
const errorMsg = [
    "El nombre no puede superara los 30 caracteres",
    "Ingrese un mail correcto",
    "Ingrese un numero correcto",
    "El mensaje no puede superara los 300 caracteres",
    "El campo no puede estar vacio"
];

let verificationOk = (i) => {
    flags[i] = true;
    error[i].innerText = "";
    wrongIcon[i].style.opacity = "0";
    okIcon[i].style.opacity = "1";

};

let verificationEmpty = (x, o) => {
 
    arrayForm.forEach((element, i) => {
        if (element.value === "") {
            okIcon[i].style.opacity = "0";
            wrongIcon[i].style.opacity = o;
            error[i].innerHTML = x;
            /* console.log(x);*/
            formLi[i].appendChild(error[i]);
            console.log(error[i].innerText);
              console.log(x);
            /*error[i].innerText = x;*/

        }
    });
};

let verificationWrong = (i) => {
    flags[i] = false;
    error[i].innerHTML = errorMsg[i];
    formLi[i].appendChild(error[i]);
    wrongIcon[i].style.opacity = "1";
    okIcon[i].style.opacity = "0";
       console.log(" verificationWrong");
};

form.addEventListener("change", (e) => {

    for (let i = 0; i < 3; i++) {
        if (arrayForm[i].value.length > 30) {
            verificationWrong(i);
        } else {
            verificationOk(i);
        }
    }

    if (isNaN(arrayForm[2].value) || arrayForm[2].value.length < 8 || arrayForm[2].value.length > 20) {
        verificationWrong(2);

    } else {

        verificationOk(2);
    }

    if (
        !arrayForm[1].value.includes("@") ||
        !arrayForm[1].value.includes(".com")
    ) {
        verificationWrong(1);
    } else {
        verificationOk(1);

    }
    if (arrayForm[3].value.length > 300) {
        verificationWrong(3);

    } else {

        verificationOk(3);
    }
    let x = "";
    arrayForm.forEach((element, i) => {
        if (element.value === "") {
            okIcon[i].style.opacity = "0";
            wrongIcon[i].style.opacity = "0";
            error[i].innerText = x;
            flags[i] = false;

        }
    });
    verificationEmpty(x, 0);
      flags.forEach((flag, i) => {
          console.log(flag);
      })
});

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!flags[0]||!flags[1]||!flags[2]||!flags[3]) {

        verificationEmpty(errorMsg[4], 1);
         return false;

    }

    if(flags[0]&&flags[1]&&flags[2]&&flags[3]){


        e.preventDefault();
        for (let i = 0; i < arrayForm.length; i++) {
            let labelName;
            switch (i) {
                case 0:
                    labelName = "Nombre: ";
                    break;
                case 1:
                    labelName = "Email: ";
                    break;
                case 2:
                    labelName = "Telefono: : ";
                    break;
                case 3:
                    labelName = "Mensaje: ";
                    break;
            }
            arrayConfirmacion[i].innerHTML = labelName + arrayForm[i].value;

            form.classList.add("hiddenForm");
            formConfimacion.classList.remove("hiddenForm");
        }

    }

});
