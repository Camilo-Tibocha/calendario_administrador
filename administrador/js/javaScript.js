document.addEventListener("DOMContentLoaded", function() {
    const tablaEmpleados = document.getElementById("tablaEmpleados").tBodies[0];
    const formulario = document.getElementById("formulario");
    const createButton = document.querySelector(".createButton");
    const guardarButton = document.querySelector(".guardarButton");
    const cancelarButton = document.querySelector(".cancelarButton");
    let editando = false;
    let filaEditar = null; 

    const errorNombre = document.getElementById("errorNombre");
    const errorApellido = document.getElementById("errorApellido");
    const errorCargo = document.getElementById("errorCargo");
    const errorSalario = document.getElementById("errorSalario");

    createButton.addEventListener("click", function() {
        formulario.style.display = "block";
        createButton.style.display = "none";
        limpiarFormulario();
        limpiarErrores();
        editando = false;
        filaEditar = null; 
    });

    cancelarButton.addEventListener("click", function() {
        formulario.style.display = "none";
        createButton.style.display = "block";
        limpiarFormulario();
        limpiarErrores();
        editando = false;
        filaEditar = null;
    });

    function limpiarFormulario() {
        document.getElementById("nombreNuevo").value = "";
        document.getElementById("apellidoNuevo").value = "";
        document.getElementById("cargoNuevo").value = "";
        document.getElementById("salarioNuevo").value = "";
    }

    function limpiarErrores() {
        errorNombre.textContent = "";
        errorNombre.style.display = "none";
        errorApellido.textContent = "";
        errorApellido.style.display = "none";
        errorCargo.textContent = "";
        errorCargo.style.display = "none";
        errorSalario.textContent = "";
        errorSalario.style.display = "none";
    }

    function agregarEmpleado(nombre, apellido, cargo, salario) {
        const fila = tablaEmpleados.insertRow();
        const celdas = [
            fila.insertCell(0),
            fila.insertCell(1),
            fila.insertCell(2),
            fila.insertCell(3),
            fila.insertCell(4),
            fila.insertCell(5)
        ];

        celdas[0].textContent = nombre;
        celdas[1].textContent = apellido;
        celdas[2].textContent = cargo;
        celdas[3].textContent = salario;
        celdas[4].innerHTML = `<button class="editarButton">Editar</button>`;
        celdas[5].innerHTML = `<button class="borrarButton">Borrar</button>`;

        celdas[4].querySelector(".editarButton").addEventListener("click", function() {
            filaEditar = fila;
            mostrarFormularioEdicion();
        });

        celdas[5].querySelector(".borrarButton").addEventListener("click", function() {
            fila.parentElement.removeChild(fila); 
        });
    }

    function mostrarFormularioEdicion() {
        formulario.style.display = "block";
        createButton.style.display = "none";
        limpiarErrores();

        const celdas = filaEditar.cells;
        document.getElementById("nombreNuevo").value = celdas[0].textContent;
        document.getElementById("apellidoNuevo").value = celdas[1].textContent;
        document.getElementById("cargoNuevo").value = celdas[2].textContent;
        document.getElementById("salarioNuevo").value = celdas[3].textContent;

        editando = true;
    }

    function soloLetras(cadena) {
        return /^[A-Za-z]+$/.test(cadena);
    }

    guardarButton.addEventListener("click", function(event) {
        event.preventDefault();

        const nombre = document.getElementById("nombreNuevo").value;
        const apellido = document.getElementById("apellidoNuevo").value;
        const cargo = document.getElementById("cargoNuevo").value;
        const salario = document.getElementById("salarioNuevo").value;

        limpiarErrores();

        let hayError = false;

        if (nombre === '') {
            errorNombre.textContent = "El nombre es obligatorio.";
            errorNombre.style.display = "block";
            hayError = true;
        } else if (!soloLetras(nombre)) {
            errorNombre.textContent = "El nombre solo puede contener letras.";
            errorNombre.style.display = "block";
            hayError = true;
        }

        if (apellido === '') {
            errorApellido.textContent = "El apellido es obligatorio.";
            errorApellido.style.display = "block";
            hayError = true;
        } else if (!soloLetras(apellido)) {
            errorApellido.textContent = "El apellido solo puede contener letras.";
            errorApellido.style.display = "block";
            hayError = true;
        }

        if (cargo === '') {
            errorCargo.textContent = "El cargo es obligatorio.";
            errorCargo.style.display = "block";
            hayError = true;
        } else if (!soloLetras(cargo)) {
            errorCargo.textContent = "El cargo solo puede contener letras.";
            errorCargo.style.display = "block";
            hayError = true;
        }

        if (salario === '') {
            errorSalario.textContent = "El salario es obligatorio.";
            errorSalario.style.display = "block";
            hayError = true;
        }

        if (salario < 0) {
            errorSalario.textContent = "El salario no puede ser negativo.";
            errorSalario.style.display = "block";
            hayError = true;
        }

        if (!hayError) {
            if (editando && filaEditar !== null) {
                filaEditar.cells[0].textContent = nombre;
                filaEditar.cells[1].textContent = apellido;
                filaEditar.cells[2].textContent = cargo;
                filaEditar.cells[3].textContent = salario;
                formulario.style.display = "none";
                createButton.style.display = "block";
                limpiarFormulario();
                editando = false;
                filaEditar = null; 
            } else {
                agregarEmpleado(nombre, apellido, cargo, salario);
                formulario.style.display = "none";
                createButton.style.display = "block";
                limpiarFormulario();
            }
        }
    });

});