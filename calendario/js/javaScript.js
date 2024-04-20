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
    alert('El evento se ha registrado exitosamente.');

    let fechas = [];
    const mes = document.getElementById('mes').value;
    const dia = document.getElementById('dia').value;
    const evento = document.getElementById('evento').value;

    fechas.push(mes);
    fechas.push(dia);
    fechas.push(evento);

    const resultado = document.getElementById('datos');
    resultado.textContent = fechas;

    console.log(fechas)
}
});