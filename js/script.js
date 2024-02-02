//Crear las varibles (parseFloat= numero de coma flotante)(prompt() esto es para solicitar un dato)
let celsius = parseFloat(prompt('Grado Celsius:'));
//crear variable para la conversión Fahrenheit
let convertirFahrenheit= (9/5 * celsius)+ 32;
//crear variable para la conversión Kelvin
let convertirKelvin = parseFloat(celsius) + 273.15;

//Mostrar mensaje por pantalla de la conversión Fahrenheit
document.write(convertirFahrenheit + "°F " + (" y "));
//Mostrar mensaje por pantalla de la conversión Kelvin
document.write(convertirKelvin + "K");
