const fruits =  ["apple" , "lemon"];

switch (fruits)  {
   case "mango":
   console.log("this fruits have not on market");
   break;
   case "watermelon":
   console.log("this fruits have not on market");
   break;
   case  "apple":
   case "lemon":
   console.log("you can get on market");
   break;
   default :
   console.log("sorry");
   

}


fruits[3]= "banana";
fruits[5]= "berry";

console.table(fruits);

const cars = {};

cars.bmw = "blue";
cars.mazda = "orange";
cars.Toyota = "gray";


console.log(cars.bmw);



