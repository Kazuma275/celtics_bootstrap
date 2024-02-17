/*************************
 *  validation functions *
 *************************/

/*
    javascript of celtics_bootstrap
*/

function validacion(){
    let correcto = true; //todo funciona por defecto
    let name = document.getElementById('name').value; // getter
    let surnames = document.getElementById('surnames').value; // getter
    let email = document.getElementById('email').value; // getter
    let city = document.getElementById('city').value;

    if (name == "" || /^\s+$/.test(name) || /[0-9]/.test(name) || ! /[a-zñ]{2,}/.test(name)) {
        document.getElementById('nameHelp').style.visibility="visible";
        document.getElementById('name').style.borderColor="red";
        correcto = false;
    }


    if (apellido == "" || /^\s+$/.test(surnames) || /[0-9]/.test(surnames) || ! /[a-zñ]{2,}/.test(surnames)) {
        document.getElementById('surnamesHelp').style.visibility="visible";
        document.getElementById('surnames').style.borderColor="red";
        correcto = false;
    }

    if (email == "" || /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email)) {
        document.getElementById('emailHelp').style.visibility="visible";
        document.getElementById('email').style.borderColor="red";
        correcto = false;
    }

    if (city == "" || ! /[A-ZÑ]+/.text(city) || /[a-zñ]+/.test(city) || ! /[0-9]+/.text(city) || ! /[.,;+-_&%$?!]+/.test(city) || (city.length >= 8 && city.length <= 15)) {
        document.getElementById('cityHelp').style.visibility="visible";
        document.getElementById('city').style.borderColor="red";
        correcto = false;
    }

    if (provincia == 0 ) {
        document.getElementById('provinciaHelp').style.visibility="visible";
        document.getElementById('provincio').style.borderColor="red";
        correcto = false;
    }

    
    if (name == "" || /^\s+$/.test(name) || /[0-9]/.test(name) || ! /[a-zñ]{2,}/.test(name)) {
        document.getElementById('nameHelp').style.visibility="visible";
        document.getElementById('name').style.borderColor="red";
        correcto = false;
    }


        return correcto;

}

function resetear(id) {
    document.getElementById(id + 'Help').style.visibility="hidden";
    document.getElementById(id).style.borderColor="lightgray";
}