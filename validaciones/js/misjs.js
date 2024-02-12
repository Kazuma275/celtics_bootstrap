/***********************
 *  funcion de validación
 * 
*/
/* 
    javascript de formulario.html
*/

function validacion(){
    let correcto = true; //todo funciona por defecto
    let nombre = document.getElementById('nombre').value; // getter
    let apellidos = document.getElementById('apellidos').value; // getter

    if (nombre == "" || ) {
        document.getElementById('nombreHelp').style.visibility="visible";
        document.getElementById('nombre').style.borderColor="red";
        correcto = false;
        // no debería volverse aquí return false;
    }


    if (apellido == "") {
        document.getElementById('apellidosHelp').style.visibility="visible";
        document.getElementById('apellidos').style.borderColor="red";
        correcto = false;
        // no debería volverse aquí: return false;
    }

        return correcto;

}

function resetear(id) { //instancio con nombre, apellidos, etc...
    document.getElementById(id + 'Help').style.visibility="hidden"; // concateno el id con el 'Help'
    document.getElementById(id).style.borderColor="lightgray";
}