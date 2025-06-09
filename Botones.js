function consulta()
{
    var barrio = document.getElementById("n1").value.trim();

    if(barrio == ""){
        alert("Ingresa el nombre de tu barrio");
        return False;
    }
    var barrioLower = barrio.toLowerCase();
    var barriosDisponibles = ['miraflores', 'sopocachi', 'san pedro', 'villa fátima', 
                             'obrajes', 'calacoto', 'achumani', 'alto obrajes', 
                             'san miguel', 'pampahasi', 'cotahuma', 'tembladerani', 
                             'centro', 'munaypata', 'villa el carmen', 'los pinos', 
                             'villa copacabana', 'valle hermoso', 'ciudad satelite', 'san antonio'];

    var encontrado = false;
    var i = 0;
    while(i < barriosDisponibles.length && !encontrado) {
        if(barriosDisponibles[i] === barrioLower) {
            encontrado = true;
        }
        i++;
    }
    
    if(encontrado) {
        alert("¡Felicidades! \nTu barrio " + barrio + " está incluido." + "\n\nIngrese a la pestaña de entregas para registrar su pedido" );
    } else {
        alert("Lo sentimos \nTu barrio no está incluido por el momento");
    }
    return false;
}

function boton() {
    const inputdireccion = document.getElementById('d1');
    const valordireccion = inputdireccion.value.trim(); 

    const inputcelular = document.getElementById('n1');
    const valorcelular = inputcelular.value.trim();

    if (valordireccion === "") {
        alert("Por favor, anota tu direccion para la entrega");
        return;
    } 
    if (valorcelular === "") {
        alert("Por favor, anota tu número de telefono");
        return;
    } 
    alert("Tu solicitud ha sido registrada. En maximo 15 minutos se contactará contigo un repartidor para coordinar de mejor manera.");
    inputdireccion.value = "";
    inputcelular.value = "";
}