
// let condition = false;

// if(condition){
//    console.log("*");
//    console.log("* *");
//    console.log("* * *");
// } else {
//    console.log("* *");
//    console.log("*");
//    console.log("* * *");
// }

 

/////////////////

// for (let i = 1;i <= 5;i++) {
//       console.log("*");
//       console.log("* *");
//       console.log("* * *");
// }


/////////
// const markCheck = function(marks) {

// if(marks >=80){
//       return("D");
// }
// else if(mark => 40) {
//       return("P");
// }
// else if(mark < 40){
//       return("F");
// }
// else {
//       return("something wrong");
// }
// };

// console.log(markCheck(50));
// console.log(markCheck(80));
// console.log(markCheck(90));
// console.log(markCheck(30));

///////////////

// function checkMark(mark){
//       if(mark >= 40) {
//             return "Passed";

//       }
//       return "Failed";
// }
// console.log(checkMark(60));
// console.log(checkMark(40));
// console.log(checkMark(35));



///////////////////


// let wakeUpTime = 6;

// function canIPunish(wakeUpTime){
//       if(wakeUpTime > 8 ) {
//             return "they hit me"
//       }
//       return "Ok";
// }
// console.log(canIPunish(6));




///////////////


// function walk(pocketMoney) {
//       if(pocketMoney >= 600){
//             return "take a bus";


//       }
//       return "Walking";
// }

// console.log(walk(1000));
// console.log(walk(300));
// console.log(walk(600));

////////////////

// function waiting(time){
//       if( time >= 9) {
//             return "Teaching star class room";
//       }
//       return  "waiting students";

// }
// console.log(waiting(8));
// console.log(waiting(10));
// console.log(waiting(7));
// console.log(waiting(9));

/////////////////////


// function login(userName,passWord){
//       if (userName === "phyoxithu@gmail.com" && passWord === "12345"){
//       return "Login complete";
//       }
//       return "Login Fail";

// }
// console.log(login("phyoxithu@gmail.com","12345"));
// console.log(login("phyoxithu@gmail.com","1235"));
// console.log(login("phyoxith@gmail.com","12345"));
// console.log(login("phyoxithu@gmail.com","12345"));
// console.log(login("phyoithu@gmail.com","2345"));

/////////////////


// function goToSchool(busNumber){
//       if(busNumber === 65 || busNumber === 20 ){
//             return "you will get school";

//       }
//       return "you will miss";
// }
// console.log(goToSchool(20));
// console.log(goToSchool(30));
// console.log(goToSchool(65));
// console.log(goToSchool(19));

/////////////////////

// let carCost = {
//       honda : "$ 12000",
//       mazdaDemio : "$ 9000",
//       beta : "$ 10000",
//       ecoSport : "$ 30000",
// }

// let youCanBuy = function(amount,car){
//       let carCostPrice = carCost[car];
//      let youHaveMoney = amount;
//      if(youHaveMoney >= 30000){
//       return "ecoSport" + " mazdaDemio" + " beta" + " honda";
//      } else if ( youHaveMoney >=12000){
//       return "honda" + " mazdaDemio" + " beta"+ carCostPrice

//      }
//      else if ( youHaveMoney >= 12000){
//       return "beta" + " mazdaDemio";
//      }
//      else if( youHaveMoney >= 9000){
//       return "beta";
//      }
//      else  {
//       return "Sorry not enough money !"
//  }

// }
// console.log(youCanBuy(40000));
// console.log(youCanBuy(8000));
// console.log(youCanBuy(14000));
// console.log(youCanBuy(9500));
// console.log(youCanBuy(5000));


/////////////////


// function attendance(arrivalTime,officeStarTime = 9, rate = 1000){
//       if(arrivalTime > officeStarTime) {
//             let lateTime = arrivalTime - officeStarTime;
//             let lateAmount = rate * lateTime;
//             return "U late " + lateAmount;
//       }
//       return "Thank u";
// }
// console.log(attendance(12));
// console.log(attendance(10));



// console.log(attendance(8,5,10));
// console.log(attendance(6,6,10));

//////////////////////

// function takeABus(pocketMoney, busFeed = 300){
//       // if(pocketMoney > busFeed * 2){
//       if(pocketMoney > busFeed) {
//             let letMoney = pocketMoney - busFeed;
//             // return "u can take a bus " + letMoney;
//       return `U can take a bus ${pocketMoney-busFeed}`;
//       }
//       return "walking";
// }

// console.log(takeABus(600));


///////////////////////

// function yccEntrance(writing,viper,passMark = 60){
//       if (writing >= passMark && viper >= passMark){
//             return "you will passed YCC";
//       }
//       return "Sorry u can't";
// }
// console.log(yccEntrance(60,50));
// console.log(yccEntrance(60,80));
// console.log(yccEntrance(40,70));

///////////////

// function chooseBus(busNo){
//       if(busNo === 20 || busNo === 65 ){
//             return "U can get bus";
//       }
//       return "U can't";
// }
// console.log(chooseBus(19));
// console.log(chooseBus(20));
// console.log(chooseBus(30));
// console.log(chooseBus(65));

///////////////

// function search(input){
//       // if(input){
//       //       return "U are searching " + input + " keyword";
//       // }
//       // return "please input something";
//       if (!input){
//             return alert("please input something");
      
//       }
//       return "U are searching " + input + " keyword";
      

// }


// console.log(search(""));

///////////////////

