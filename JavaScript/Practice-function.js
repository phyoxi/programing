

// let fruits = {
//    apple : 300 ,
//    orange : 600 ,
//    pineapple : 1000,
//    avogadro : 1200,
// } ;

// let record = [];
// let primaryNumber = 0;
// let total = 0;
// let subTotal = 0 ;

// function calculateTax (amount,percentage = 5) {
//     return amount * (percentage / 100);
 
// }

// function calculateMarket (itemName, quantity) {
//    let fruitsPrice  = fruits[itemName];
   
//    let buyFruitsPrice = fruitsPrice * quantity;
//    record[primaryNumber++]  = {
//       itemName ,
//       quantity,
//       buyFruitsPrice,
//    };
//    total += buyFruitsPrice;
//    return buyFruitsPrice + " mmk";
   
// }

// console.log(calculateMarket("apple",20));
// console.log(calculateMarket("pineapple",2));
// console.log(calculateMarket("avogadro",10));
// console.log(calculateMarket("orange",10));

// console.table({total ,
//    tax : calculateTax (total),
//    subTotal : total + calculateTax(total),
// });


//////////////////////////////////////


// let x = function(){
//    return "x";

// }
// let y =function ( ){
//    return "y " + x();
// }

// console.log(y());

// (function () { 
 

// })();

// {let x = 5 ;
// console.log(x) 
// const y =10 ;
// }

//////////////////////

let rates = {
   usd : 2100,
   sgd : 1561,
   eur : 2268,
   jay : 1520,
   vnd : 8.9,
   mmk : 1,
   php : 37.6,
}
function exchangeRateCurrency (amount,wantToCurrency,fromCurrency){
   let wantToCurrencyRate = rates[wantToCurrency];
   let fromCurrencyRate = rates[fromCurrency];
   totalCost =  (fromCurrencyRate * amount) / wantToCurrencyRate;
   return totalCost + " " + wantToCurrency;
}
console.log(exchangeRateCurrency(100,"usd", "eur"));
console.log(exchangeRateCurrency(100, "php", "sgd"));
console.log(exchangeRateCurrency(100,"usd", "mmk"));
console.log(exchangeRateCurrency(100,"sgd","usd"));
console.log(exchangeRateCurrency(100,"mmk","sgd"));