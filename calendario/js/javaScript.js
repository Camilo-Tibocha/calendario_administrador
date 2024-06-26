document.getElementById('mes').addEventListener('change',(event)=>{
    console.log(event.target.value);
    const mes = event.target.value;
    const ul= (new Date(2024, parseInt(mes)+1 ,0)).getDate();
    document.getElementById('dia').setAttribute('max', ul);
});

document.getElementById('registrar').addEventListener('click', (event) => {
event.preventDefault();
if(document.getElementById('evento').value === ""){
    alert('Ingrese el contenido del evento para poder registrarlo');
} else{
    let fechas = [];
    const mes = document.getElementById('mes').value;
    const dia = document.getElementById('dia').value;
    const evento = document.getElementById('evento').value;
    const mesTexto = document.getElementById('mes').options[document.getElementById('mes').selectedIndex].text;

    fechas.push(mesTexto);
    fechas.push(dia);
    fechas.push(evento);

    const fila = tablaDatos.insertRow();
    const celdaMes = fila.insertCell(0);
    const celdaDia = fila.insertCell(1);
    const celdaEvento = fila.insertCell(2);
    const celdaBoton = fila.insertCell(3);
    const celdaEliminar = fila.insertCell(4);

    celdaMes.textContent = mesTexto;
    celdaDia.textContent = dia;
    celdaEvento.textContent = evento;
    celdaBoton.innerHTML = '<button class="modificar" id="modificar">Modificar</button>';
    celdaEliminar.innerHTML = '<button class="eliminar" id="eliminar">Eliminar</button>';;

    alert('El evento se ha registrado exitosamente.');
}
});

document.getElementById('tablaDatos').addEventListener('click', (event) => {
    if (event.target.matches('#modificar')) {
      const row = event.target.parentNode.parentNode;
      const mes = row.cells[0].textContent;
      const dia = row.cells[1].textContent;
      const evento = row.cells[2].textContent;
  
      const nuevoMes = document.getElementById('mes').options[document.getElementById('mes').selectedIndex].text;
      const nuevoDia = document.getElementById('dia').value;
      const nuevoEvento = document.getElementById('evento').value;
  
      row.cells[0].textContent = nuevoMes;
      row.cells[1].textContent = nuevoDia;
      row.cells[2].textContent = nuevoEvento;
      alert('El registro se ha modificado exitosamente.');
    }
  });

document.getElementById('tablaDatos').addEventListener('click', (event) => {
    if (event.target.matches('#eliminar')) {
        let fila = event.target.parentNode.parentNode;
        fila.remove();
        alert('El registro se ha eliminado exitosamente.');
    }
});
