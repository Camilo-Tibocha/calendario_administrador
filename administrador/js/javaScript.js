document.addEventListener("DOMContentLoaded", function() {
    const tablaEmpleados = document.getElementById("tablaEmpleados").getElementsByTagName('tbody')[0];
    const formulario = document.getElementById("formulario");
    const createButton = document.querySelector(".createButton");
    const guardarButton = document.querySelector(".guardarButton");
    const cancelarButton = document.querySelector(".cancelarButton");
    let editando = false;
    let indiceEditar = null;

    
    createButton.addEventListener("click", function() {
        formulario.style.display = "block";
        createButton.style.display = "none";
        editando = false;
        indiceEditar = null;
    });

    
    cancelarButton.addEventListener("click", function() {
        formulario.style.display = "none";
        createButton.style.display = "block";
        limpiarFormulario();
        editando = false;
        indiceEditar = null;
    });

    
    function limpiarFormulario() {
        document.getElementById("nombreNuevo").value = "";
        document.getElementById("apellidoNuevo").value = "";
        document.getElementById("cargoNuevo").value = "";
        document.getElementById("salarioNuevo").value = "";
    }

   
    function agregarEmpleado(nombre, apellido, cargo, salario) {
        const fila = tablaEmpleados.insertRow();
        const celdaNombre = fila.insertCell(0);
        const celdaApellido = fila.insertCell(1);
        const celdaCargo = fila.insertCell(2);
        const celdaSalario = fila.insertCell(3);

        celdaNombre.textContent = nombre;
        celdaApellido.textContent = apellido;
        celdaCargo.textContent = cargo;
        celdaSalario.textContent = salario;
    }

 
    guardarButton.addEventListener("click", function() {
        const nombre = document.getElementById("nombreNuevo").value;
        const apellido = document.getElementById("apellidoNuevo").value;
        const cargo = document.getElementById("cargoNuevo").value;
        const salario = document.getElementById("salarioNuevo").value;

        if (editando && indiceEditar !== null) {
            const filaEditar = tablaEmpleados.rows[indiceEditar];
            filaEditar.cells[0].textContent = nombre;
            filaEditar.cells[1].textContent = apellido;
            filaEditar.cells[2].textContent = cargo;
            filaEditar.cells[3].textContent = salario;
            formulario.style.display = "none";
            createButton.style.display = "block";
            limpiarFormulario();
            editando = false;
            indiceEditar = null;
        } else {
            agregarEmpleado(nombre, apellido, cargo, salario);
            formulario.style.display = "none";
            createButton.style.display = "block";
            limpiarFormulario();
        }
    });

   
    tablaEmpleados.addEventListener("click", function(event) {
        if (event.target && event.target.nodeName == "BUTTON" && event.target.textContent == "Editar") {
            const indice = event.target.parentElement.parentElement.rowIndex;
            mostrarFormularioEdicion(indice);
        }
    });

});