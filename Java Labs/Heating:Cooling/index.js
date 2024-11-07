

let actualTemp = 70

let desiredTemp = 68

if (actualTemp > desiredTemp) {
    console.log("Run Ac")
} else if (actualTemp < desiredTemp) {
    console.log("Run heat")
} else {
    console.log("Standy")
}


/* Extended Challenge  */

let tempCelsius = 80
let targetUnit = "F"

switch (targetUnit) {
    case "C":
    console.log("The temperature is" + " " + (tempCelsius) + " " + "Celsius")
    break;

    case "F": 
   tempFahrenheit = (tempCelsius * (9/5) + 32)
    console.log("The temperature is" + " " + (tempFahrenheit) + " " + "Fahrenheit")
    break;

    case "K":
        tempKelvin = tempCelsius + 273.15
        console.log("The temperature is" + " " + (tempKelvin) + " " + "Kelvin")
        break;
}

