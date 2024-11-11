const sum = (a,b) => {
    return a + b
}
console.log(sum(7,3))
module.exports = { sum };


// const fromEuroToDollar = function(valueInEuro) {

//     let valueInDollar = valueInEuro * 1.07;

//     return valueInDollar;
// }

// const fromDollarToYen= function(valueInDollar) {

//     let valueInYen = valueInDollar * 156.5;
  
//     return valueInYen;
// }

// const fromYenToPound = function(valueInPound) {
  
//     let valueInPound = valueInYen * 0.87;
   
//     return valueInPound;
// }




// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // yen japonés
    "USD": 1.07, // dólar estadounidense
    "GBP": 0.87, // libra esterlina
}

// Función para convertir de dólares a yenes
const fromDollarToYen = (dollars) => {
    return dollars * (oneEuroIs.JPY / oneEuroIs.USD);
}

// Función para convertir de euros a dólares
const fromEuroToDollar = (euros) => {
    return euros * oneEuroIs.USD;
}

// Función para convertir de yenes a libras
const fromYenToPound = (yen) => {
    return yen * (oneEuroIs.GBP / oneEuroIs.JPY);
}

// Exportar las funciones
module.exports = { 
    sum, 
    fromDollarToYen, 
    fromEuroToDollar, 
    fromYenToPound 
};