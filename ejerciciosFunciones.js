function celciusFahrenheit(celsius){
  var cTemp = celsius;
  var cToFahr = cTemp * 9 / 5 + 32;
  var convert = cTemp+'\xB0C son ' +cToFahr+ ' \xB0F';
    console.log(convert);
}

function fahrenheittoCelcius(fahrenheit) {
  var fTemp = fahrenheit;
  var fToCel = (fTemp - 32) * 5 / 9;
  var convert = fTemp+'\xB0F son ' +fToCel+ ' \xB0C';
    console.log(convert);
} 
celciusFahrenheit(60);
fahrenheittoCelcius(45);