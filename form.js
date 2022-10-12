const nombre = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const msg = document.getElementById("msg");

const arrayForm = [nombre, email, phone, msg];
const form = document.getElementById("formu");
const error = document.getElementsByClassName("error");
const okIcon = document.getElementsByClassName("fa-circle-check");
const wrongIcon = document.getElementsByClassName("fa-circle-xmark");
let flag = false;

const errorMsg = [
    "El nombre no puede superara los 30 caracteres",
    "Ingrese un mail correcto",
    "Ingrese un numero correcto",
    "El mensaje no puede superara los 300 caracteres",
    "El campo no puede estar vacio"
];

let verificationOk = (i) => {
    error[i].innerText = "";
    wrongIcon[i].style.opacity = "0";
    okIcon[i].style.opacity = "1";
    flag = true;
};

let verificationEmpty = (x) => {
    arrayForm.forEach((element, i) => {
        if (element.value === "") {
            okIcon[i].style.opacity = "0";
            wrongIcon[i].style.opacity = "0";
            error[i].innerText = x;
            flag = false;
        }
    });
};

let verificationWrong = (i) => {
    error[i].innerText = errorMsg[i];
    wrongIcon[i].style.opacity = "1";
    okIcon[i].style.opacity = "0";
    flag = false;
};

form.addEventListener("change", (e) => {

    for (let i = 0; i < 3; i++) {
        if (arrayForm[i].value.length > 30) {
            verificationWrong(i);
        } else {
            verificationOk(i);
        }
    }

    if (isNaN(arrayForm[2].value) || arrayForm[2].value.length < 8) {
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
    if  (arrayForm[3].value.length>300)  {
        error[3].innerText = errorMsg[3];
    }else{
        verificationOk(3);
    }
    let x = "";
    verificationEmpty(x);
/*    console.log(flag);*/
});

form.addEventListener("submit", (e) => {
    if (!flag) {
        verificationEmpty(errorMsg[4]);
 /*       console.log("Error");*/
        e.preventDefault();
    }
});
