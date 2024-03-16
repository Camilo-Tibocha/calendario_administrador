document.addEventListener("DOMContentLoaded", function () {
    document.querySelector('.createButton').addEventListener('.click', mostrarFormulario);
    document.querySelector('.guardarButton').addEventListener('.click', guardarEmpleado);
    document.querySelector('.cancelarButton').addEventListener('.click', cancelarCreacion);
});

function mostrarFormulario() {
    var nombre = document.getElementById("formulario");
    formulario.style.display = "block";
}


function guardarEmpleado() {
    var nombre = document.getElementById("nombreNuevo").value;
    var apellido = document.getElementById("apellidoNuevo").value;
    var cargo = document.getElementById("CargoNuevo").value;
    var salario = document.getElementById("salarioNuevo").value;

    var tabla = document.getElementById("tablaEmpleados").getElementsByTagName('tbody')[0];
    var nuevaFila = tabla.insertRow();
    var celdaNombre = nuevaFila.insertCell(0);
    var celdaApellido = nuevaFila.insertCell(1);
    var celdaCargo = nuevaFila.insertCell(2);
    var celdaSalario = nuevaFila.insertCell(3);

    celdaNombre.innerHTML = nombre;
    celdaApellido.innerHTML = apellido;
    celdaCargo.innerHTML = cargo;
    celdaSalario.innerHTML = salario;

    reiniciarFormulario();

}

function reiniciarFormulario() {
    var formulario = document.getElementById("formulario");
    formulario.style.display = "none";
    var nombre = document.getElementById("nombreNuevo").value = "";
    var apellido = document.getElementById("apellidoNuevo").value = "";
    var cargo = document.getElementById("CargoNuevo").value = "";
    var salario = document.getElementById("salarioNuevo").value ="";
}

function cancelarCreacion(){
    reiniciarFormulario
}
