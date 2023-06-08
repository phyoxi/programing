
// for (let i = 0;i < 4;i++) {
//       console.log(i);
//       console.log("*");
//       console.log("* *");
//       console.log("* * *");
// }
// for (let i = 0;i < 15; i += 2 ) {
//    console.log(i,"loop",i < 15 );
   
// }
//////////////////////////

let fruits = ["mango","apple","orange","pineapple","lemon"];

let myself = {
   myName : "phyoxithu",
   myAge : 30,
   skill : "wed developer",
   live : "Yangon",
}

// for (let i= 0; i <fruits.length;i++){
//    if(fruits[i] === "orange" || fruits[i] === "lemon"){
//       continue;
//    }
   
//    console.log(`I like ${fruits[i]}`);


// }

/////////////////

for (fruit of fruits){
   console.log(`i like ${fruit}`);
}


////////////////

for (key in myself){
   console.log(key,myself[key]);
}


//////////////////////

// Self Study

//    switch statement;
//    while loop ,do while;
//////////////////////////////////


while (condition)
statement

////////////////


do {
   statement
   
 }
 while (condition);





////////////////////


//switch Syntax

switch (expression) {
   case value1:
     statements
   case value2:
     statements
   // …
   case valueN:
     statements
   default:
     statements
 }


 ////////////////////////////