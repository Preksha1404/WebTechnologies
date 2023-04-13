function convertTemp() {
    var temp = document.getElementById("temp").value;
    var conversionType = document.getElementById("conversion-type").value;
    if (conversionType == "Celsius-to-Fahrenheit") 
    {
      var result = (temp * 9 / 5) + 32;
    } 
    else if (conversionType == "Fahrenheit-to-Celsius") 
    {
      var result = (temp - 32) * 5 / 9;
    }
    document.getElementById("result").innerHTML = result + " &deg;F";
}