// function triangle() {
//    console.log("*");
//    console.log("* *");
//    console.log("*  *  *");
//    console.log("*  *  *  *");
//    return "hello";
   
//    console.log("------");
// }
//  triangle();
//  triangle();
//  triangle();
// {
//    console.log("*");
//    console.log("* *");
//    console.log("*  *  *");
//    console.log("*  *  *  *");
// }
// console.log(triangle());


//parameter ============vv
// function inchesToFeet(inches = 0) {
//    // let inches= 60;
//    console.log(inches);
//    let resultFeet = inches / 12;
//    return resultFeet + "ft";

// }
// arguments =============vvv
// console.log(inchesToFeet(60));
// console.log(inchesToFeet(250));
// console.log(inchesToFeet());

// let results = [];
// let cont = 0 ;


// function calculateArea(width,breath) {
//    let resultArea = width * breath;
//    let areaUnit = "sqft";
//    let area = resultArea + " " + areaUnit;
//    let resultObject = {
//       width : width + "ft",
//       breath : breath + "ft",
//       area : area,
//    };
//    results[cont++] = resultObject;

//    return area;
// }
// console.log(calculateArea(12,50));
// console.log(calculateArea(18,50));
// console.log(calculateArea(19,60));


// console.table(results);

let rates =  {
   usd : 2100,
   eur : 2200,
   sgd : 1500,
   mmk : 1,
}



//  function exchangeToMmk(amount,fromCurrency){
//    let currentExchangeRate = rates[fromCurrency];
//    let resultAmount = amount * currentExchangeRate;
//    return resultAmount + " mmk";

//  }
//  console.log(exchangeToMmk(100,"usd"));
//  console.log(exchangeToMmk(100,"eur"));
//  console.log(exchangeToMmk(100,"sgd"));

function exchangeToCurrency (amount,toCurrency){
   let currentExchangeRate = rates[toCurrency];
   let resultAmount = amount / currentExchangeRate;
   return resultAmount + " " + toCurrency;

}
console.log(exchangeToCurrency(500000, "usd"));
console.log(exchangeToCurrency(500000, "eur"));
console.table(exchangeToCurrency(500000, "sgd"));

