# 🕰️ Reloj Digital

Un reloj digital elegante y moderno que muestra la hora en formato 12 horas y la fecha actual en español.

✨ Características
⏰ Hora en tiempo real - Actualización cada segundo

📅 Fecha completa - Formato: "Día, DD de mes de AAAA"

🌐 Formato 12 horas - Con indicador AM/PM

🎨 Diseño moderno - Interfaz oscura con colores vibrantes

📱 Responsive - Adaptable a diferentes dispositivos

🇲🇽 Localización - Configurado para español de México

🚀 Demo
Puedes ver el proyecto en funcionamiento aquí <!-- Agrega el link cuando esté desplegado -->

🛠️ Tecnologías Utilizadas
HTML5 - Estructura semántica

CSS3 - Estilos y diseño responsive

JavaScript - Lógica y manipulación del DOM

Date API - Manejo de fechas y horas

📦 Instalación
Clona el repositorio:

bash
git clone https://github.com/vany-dev/reloj.git
Navega al directorio del proyecto:

bash
cd reloj-digital
Abre el archivo index.html en tu navegador:

bash
# Opción 1: Doble click en el archivo
# Opción 2: Usa un servidor local
python -m http.server 8000
🎨 Personalización
Cambiar colores
Modifica el archivo style.css:

css
#hora {
  color: #tu-color; /* Color de la hora */
}

.contenedor {
  background: #tu-fondo; /* Color de fondo del contenedor */
}
Cambiar formato de hora
En app.js, modifica las opciones de formato:

javascript
// Para formato 24 horas
document.getElementById('hora').textContent = `${horas24}:${minutos}:${segundos}`;

// Para otro idioma
const fechaActual = new Date().toLocaleDateString('es-ES', fecha); // Español España

## 🔧 Funcionalidades Técnicas
JavaScript
actualizarHora(): Función principal que actualiza hora y fecha

setInterval(): Actualización automática cada 1000ms (1 segundo)

toLocaleDateString(): Formateo de fecha localizada

padStart(): Formateo con ceros a la izquierda

### CSS
Flexbox: Centrado vertical y horizontal

Box-shadow: Efectos de profundidad

Responsive Design: Adaptable a móviles

🌟 Próximas Características
Selector de formatos de hora (12h/24h)

Diferentes zonas horarias

Temas claros/oscuros

Cronómetro


## 📄 Licencia
Este proyecto está bajo la Licencia MIT.

## 👨‍💻 Autor
Jhovan Hernandez Ramirez / Vany-dev

