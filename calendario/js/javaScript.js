document.getElementById('mes').addEventListener('change',(event)=>{
    console.log(event.target.value);
    const mes = event.target.value;
    const ul= (new Date(2024, parseInt(mes)+1 ,0)).getDate();
    document.getElementById('dia').setAttribute('max', ul);
});



document.getElementById('registrar').addEventListener('click', (event) => {
if(document.getElementById('evento').value.trim() === ""){
    alert('Ingrese el contenido del evento para poder registrarlo');
    return;
} else{
    alert('El evento se ha registrado exitosamente.')
    return;
}
});