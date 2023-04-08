// var a = 676868;
// console.log(a)
// console.log(typeof(a))

// var b = "hello";
// console.log(b)
// console.log(typeof(b))

// var c = true;
// console.log(c)
// console.log(typeof(c))

// var d = false;
// console.log(d)
// console.log(typeof(d))

// var d = '676868';
// console.log(d)
// console.log(typeof(d))

// var e;
// console.log(e)
// console.log(typeof(e))

// var f = '&&%';
// console.log(f)
// console.log(typeof(f))

// var a = 768778;
// console.log(a)

// var b = 7687;
// console.log(b)

// console.log(a+b)
// console.log(a-b)

// var a = 76757;
// console.log(a)

// var b = "9878768767";
// console.log(b)

// console.log(a+b)

// var a = 7777;

// var b = "7777";

// console.log(a == b)     check data only
// console.log(a === b)    check data and data types

// var a = 9898;
// var b = 9876;

// console.log(a && b)
// console.log(a || b)
// console.log(a == b)

// console.log(2 == "2")   //equal
// console.log(2 != "2")   //Not equal
// console.log(2 === "2")   //equal
// console.log(2 !== "2")   //Not equal

// Condition statement //
// if else
// switch

// if(2>1){
//     console.log("two is greater than one")
// } else {
//     console.log("2 is not greater than one")
// }

// console.log("Welcome to RTO")
// var userAge = 10;
// if(userAge > 18) {
//     console.log("You are eligible to apply DL")
// } else if (userAge == 18){
//     console.log("You're eligible to apply LL")
// } else if (userAge >= 10){
//     console.log("Go to Nursery first")
// }
// else {
//     console.log("You are not eligible")
// }                                            // if else //

// Switch statement //

// console.log("Welcome to RTO")

// var userAge = 47;
// var flagForSwitch = true
// switch (flagForSwitch) {
//     case (userAge > 18):
//         console.log("You are eligible for DL");
//         flagForSwitch = false;
//         break;
//     case (userAge < 18):
//         console.log("You are not eligible for DL");
//         flagForSwitch = false;
//         break;
//     case (userAge <= 10):
//         console.log("You are a kid");
//         flagForSwitch = false;
//         break;
//     default:
//         console.log("Invalid AGE");
//         flagForSwitch = false;
// }
//TEST//
// console.log("Checking the number is Odd or Even");

// var num = 233;

// if (num % 2 == 0){
//     console.log("it is even");
// }else{
//     console.log("it is odd");
// }

// test2//
// console.log("Find the largest of two number.");
// var num1 = 5;
// var num2 = 10;

// if (num1 > num2){
//     console.log("this is the largest number");
// } else {
//     console.log("this is not the largest nmber");
// }

// console.log("Find the largest of three number.");
// var num1 = 65;
// var num2 = 50;
// var num3 = 40;

// if (num1 > num2 && num1 > num3){
//     console.log("num1 is the largest number");
// }
// else if (num2 > num3){
//     console.log("num2 is the largest nmber");
// }
// else {
//     console.log("num3 is the largest number");
// }

// console.log("Find a number is present in given range.");
// var number = 1;
// if(number >= 5 && number <= 25){
//     console.log("This falls under the range");
// }else {
//     console.log("this does not fall under the range");
// }

// Test using switch case //
// console.log("Checking the number is Odd or Even");
// var num = 232;
// var flagForSwitch = true;
// switch (flagForSwitch) {
//     case (num % 2 == 0):
//         console.log("This is even");
//         break;
//     case (num % 2 != 0):
//         console.log("This is odd");
//         break;
//     default:
//         break;
// }
// console.log("Find the largest of two number.");
// var num1 = 10;
// var num2 = 20;
// var number = true;
// switch (number) {
//     case (num1 > num2):
//         console.log("num1 is greater")
//         break;
//     case (num2 > num1):
//         console.log("num2 is greater")
//         break;
//     default:
//         console.log("Invalid number")
// }
// console.log("Find the largest of three number.");
// var num1 = 50;
// var num2 = 30;
// var num3 = 60;
// var numbers = true;

// switch (numbers) {
//     case (num1>num2 && num1>num3):
//         console.log("num1 is greater")
//         break;
//         case (num2>num3):
//         console.log("num2 is greater")
//         break;
//     default:
//         console.log("num is greater");
// }
// console.log("Find the number is present in given range.");

// var firstRange = 5;
// var secondRange = 25;
// var range = 1
// switch (true) {
//     case (range > firstRange && range<25):
//         console.log("This is under the given range");
//         break;
//     default:
//         console.log("This does not fall under given range");
// }

// Functions //
// console.log("Outside Function");
// var a = 2;
// var b = 6;
// function add(){
//     console.log(a+b)
// }
// add();

// function sub(){
//     console.log(a-b)
// }
// sub();
// function myFunction (){
//     if(a>b){
//         console.log("a is greater than b")
//     }
//     else if(a==b){
//         console.log("a is equal to b")
//     }
//     else{
//         console.log("b is greater than a")
//     }
// }
// myFunction();

//Sequence Parameter//
// var a = 2;
// var b = 4;

// function sub(parameter1, parameter2) {
//   console.log(parameter1 - parameter2);
// }
// sub(b, a); // sequence matters // value = 2
// sub(a, b); // sequence matters // value = -2

// function sub (para1, para2) {
//     console.log("Substracting para1 and para2")
//     return para1 - para2;                   // return funciton ends the statement
// }
// console.log(sub(a,b))

//// Q. Write a function which will return a greater value ? ////
// console.log("Below is the greater value")
// var a = 234;
// var b = 444;

// function greatNum(){
//     if (a>b){
//         console.log("a is greater than b")
//     } else {
//         console.log("b is greater than a")
//     }
// }
// greatNum();

// function greatNum(p1,p2){
//     if (a>b){
//         return "a is greater than b";
//     } else {
//         return "b is greater than a";
//     }
// }
// console.log(greatNum(a,b));

// Q. Find the biggest number and multiply it by 2 ? //
// var a = 55;
// var b = 33;

// function greater(p1,p2){
//     var bigger;
//     if (p1>p2) {
//         bigger = a;
//     } else {
//         bigger = b;
//     }
//     bigger = bigger * 2;
//     return bigger;
// }
// var ans = greater(a,b)
// console.log(ans + " ans")

/// solve questions using functions ///
// Q. Check the number is Even or Odd ? //
// var a = 235

// function evenOdd(a){
//     if (a % 2 == 0){
//         return "This is Even number"
//     } else {
//         return "This is Odd number"
//     }
// }

// var ans = evenOdd(a);
// console.log(evenOdd(a));
// Q. Find the largest of two numbers ?//
// var a = 55;
// var b = 88;

// function biggestNum(p1, p2) {
//     if (p1>p2){
//         return a;
//     } else {
//         return b;
//     }
// }
// var ans = biggestNum();
// console.log(biggestNum());

// Q. Find the largest of three numbers ?//

// var a= 55;
// var b = 444;
// var c = 334;

// function biggestNum(p1,p2,p3){
//     if (p1>p2 && p1>p3){
//         return "a is greater";
//     } 
//     else if (p2>p3){
//         return "b is greater";
//     } else {
//         return "c is greater"
//     }
// }
// var ans = biggestNum(a,b,c);
// console.log(biggestNum(a,b,c));

// Q. Find the number in the range of 5-25? //

var num = 1;

function inRange(p1){
    if(p1>=5 && 25>=p1){
        return "This falls under the range";
    }
    else{
        return "This does not fall under the range"
    }
}

var ans = inRange(num);
console.log(inRange(num));