function celsiusFahrenheit(celsius){
  var cTemp = celsius;
  var cToFahr = cTemp * 9/5+32;
  var convert = cTemp+'\xB0C son ' +cToFahr+ ' \xB0F';
    console.log(convert);
}

function fahrenheittoCelsius(fahrenheit) {
  var fTemp = fahrenheit;
  var fToCel = (fTemp - 32) * 5/9;
  var convert = fTemp+'\xB0F son ' +fToCel+ ' \xB0C';
    console.log(convert);
} 
celsiusFahrenheit(60);
fahrenheittoCelsius(45);