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

    fechas.push(mes);
    fechas.push(dia);
    fechas.push(evento);

    const fila = tablaDatos.insertRow();
    const celdaMes = fila.insertCell(0);
    const celdaDia = fila.insertCell(1);
    const celdaEvento = fila.insertCell(2);

    celdaMes.textContent = mes;
    celdaDia.textContent = dia;
    celdaEvento.textContent = evento;

    alert('El evento se ha registrado exitosamente.');

    console.log(fechas)
}
});
