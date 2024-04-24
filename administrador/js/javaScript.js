document.addEventListener("DOMContentLoaded", function() {
    const tablaEmpleados = document.getElementById("tablaEmpleados").getElementsByTagName('tbody')[0];
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
        const celdaNombre = fila.insertCell(0);
        const celdaApellido = fila.insertCell(1);
        const celdaCargo = fila.insertCell(2);
        const celdaSalario = fila.insertCell(3);
        const celdaEditar = fila.insertCell(4);
        const celdaBorrar = fila.insertCell(5);

        celdaNombre.textContent = nombre;
        celdaApellido.textContent = apellido;
        celdaCargo.textContent = cargo;
        celdaSalario.textContent = salario;
        celdaEditar.innerHTML = `<button class="editarButton">Editar</button>`;
        celdaBorrar.innerHTML = `<button class="borrarButton">Borrar</button>`;

        const editarButton = celdaEditar.querySelector(".editarButton");
        editarButton.addEventListener("click", function() {
            
            filaEditar = fila;
            mostrarFormularioEdicion();
        });

        const borrarButton = celdaBorrar.querySelector(".borrarButton");
        borrarButton.addEventListener("click", function() {
            fila.parentElement.removeChild(fila); 
        });
    }

    function mostrarFormularioEdicion() {
        formulario.style.display = "block";
        createButton.style.display = "none";
        limpiarErrores();

        const nombre = filaEditar.cells[0].textContent;
        const apellido = filaEditar.cells[1].textContent;
        const cargo = filaEditar.cells[2].textContent;
        const salario = filaEditar.cells[3].textContent;

        document.getElementById("nombreNuevo").value = nombre;
        document.getElementById("apellidoNuevo").value = apellido;
        document.getElementById("cargoNuevo").value = cargo;
        document.getElementById("salarioNuevo").value = salario;

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
