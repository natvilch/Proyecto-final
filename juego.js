function juego_sorteo() {
    var juegoform = document.getElementById("j1").value.trim();

    if (juegoform === "") {
        alert("Ingresa un número");
        return false;
    }

    if (juegoform === "2") {
        alert("¡Felicidades! \n Ganaste el descuento del 35% en tu proxima compra en el supermercado");
        return true;
    } else {
        alert("Lo sentimos \n La proxima vez lo lograrás.");
        return false;
    }
}
