function actualizarHora() {
    const hora = new Date();

    // Formato 12 horas con AM/PM
    let horas = hora.getHours();
    let ampm = horas >= 12 ? 'PM' : 'AM';
    
    // Convertir a formato 12 horas
    horas = horas % 12;
    horas = horas ? horas : 12; // Si es 0, se convierte a 12
    
    // Formatear con ceros delante
    horas = String(horas).padStart(2, '0');
    let minutos = String(hora.getMinutes()).padStart(2, '0');
    let segundos = String(hora.getSeconds()).padStart(2, '0');

    document.getElementById('hora').textContent = `${horas}:${minutos}:${segundos} ${ampm}`;

    /* Fecha */
    const fecha = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
    const fechaActual = new Date().toLocaleDateString('es-MX', fecha);
    document.getElementById('fecha').textContent = fechaActual.charAt(0).toUpperCase() + fechaActual.slice(1);
}

// Actualiza la hora cada segundo
setInterval(actualizarHora, 1000);

// Llama a la función una vez para mostrar la hora inmediatamente al cargar la página
actualizarHora();