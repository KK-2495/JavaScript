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

var userAge = 47;
var flagForSwitch = true
switch (flagForSwitch) {
    case (userAge > 18):
        console.log("You are eligible for DL");
        flagForSwitch = false;
        break;
    case (userAge < 18):
        console.log("You are not eligible for DL");
        flagForSwitch = false;
        break;
    case (userAge <= 10):
        console.log("You are a kid");
        flagForSwitch = false;
        break;
    default:
        console.log("Invalid AGE");
        flagForSwitch = false;
}
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

// var num = 1;

// function inRange(p1){
//     if(p1>=5 && 25>=p1){
//         return "This falls under the range";
//     }
//     else{
//         return "This does not fall under the range"
//     }
// }

// var ans = inRange(num);
// console.log(inRange(num));

// ****For Loop*****
// Q. Write a function to print numbers from 1 to 10? //

// var rangeStart = 1;
// var rangeEnd = 10;

// for (start, end, steps){             **/// end decides True an false //*** */*** steps is executed after the code */
//     code
// }

// for (var a =1; a <= 10; a++){
//     console.log(a)
// }

// 1 - a =1; 1<10 = true => pass => prints code => a++ => 2 = end
// 2 - a =2; 2<10 = true => pass => prints code => a++ => 3 = end
// 3 - a =3; 3<10 = true => pass => prints code => a++ => 4 = end
// .
// .
// .
// .
// 9 - a =9; 9<10 = true => pass => prints code => a++ => 10 = end
// 10 - a =10; 10<10 = false => does not pass => does not prints code => a++ => 4 = end

// var rangeStart = 10;
// var rangeEnd = 100;
// for (var a = rangeStart/2; ++a < rangeEnd/2; a++){
//     console.log(a);
// }

// function printNumbers(start, end){
//     for(var a = start; a <= end; a+=5){
//         console.log(a)
//     }
// }
// printNumbers(rangeStart, rangeEnd);

// Q. Write a function to print even numbers from 1-100? //
// var num1=10;
// var num2=100;
/////////find even numbers?////////////
// function evenNum (start, end){
//     for(var a=start; a<end; a++){
//         if(a%2!=0){
//             console.log(a)
//         }
//     }
// }
// if(num1%2==0){
//     console.log("This ie Even")
// } else{
//     console.log("This is Odd")
// }
///////find number of counts?///////

// function evenNum(start, end){
//     var count =0;
//     for(var a=start; a<=end; a++){
//         // console.log(a)
//         if(a){
//             // console.log(a);
//             count++;
//         }
//     }
//     return count;
// }

// function evenNum(start, end){
//     var count = 0;
//     for(var a=start; a<=end; a++){
//         // console.log(a)
//         if(a%2==0){
//             // console.log(a);
//             count++;
//         }
//     }
//     return count;
// }

// function evenNum(start, end){
//     var count = 0;
//     for(var a=start; a<=end; a++){
//         // console.log(a)
//         if(a%2!=0){
//             // console.log(a);
//             count++;
//         }
//     }
//     return count;
// }

// var ans = evenNum(num1, num2);
// console.log(ans +" is total number of count");

// ******ARRAY*******//
// var array = [1,2,3,4,5,6,7,8,9,0,323,54,43];
// array.push("krishnan");                      //Adds a element in the end of array//
// array.pop();                                 //Removes a element from the end of array//
// array.pop(); 
// array.pop(); 
// array.shift();                               //Removes a element from the start of an array//
// array.shift();
// array.unshift("krishnan", "kunal");          //Adds a element to the start of an array//
// array.unshift("Abhishek");                   //Adds a element to the start of an array in the entry sequence//
// console.log(array, "array");
// console.log(array.length, " - .length is a predefined func to see the length of an ARRAY");


// var studentsList = ["abhishek", "anu", "kunal", "krishnan", "snehal", "madhuri", "mayuri"];
// console.log(studentsList[2]);
// console.log(studentsList.length, "is the number of the students present");

// for(var i=0; i< studentsList.length; i++){
//     console.log(studentsList[i],i);
// }
// for(var i=0; i< studentsList.length; i++){
//     if(studentsList[i] == "kkk"){
//         console.log("found  in our data");
//     } 
// }

// var flagForSwaraj = false;
// for(var i=0; i< studentsList.length; i++){
//     if(studentsList[i] == "swaraj"){
//         flagForSwaraj = true;
//         console.log("found in our data");
//     } 
// }
// if(flagForSwaraj==false){
//     console.log("NOT found in our data");
// }


// for(var i=0; i<studentsList.length; i++){
//     if(studentsList[i]=="kunal" || studentsList[i]=="krishnan"){
//         console.log("name found in our data");
//     }
// }

// var fruits = ["mango", "pineapple", "watermelon", "papaya"];
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[4]);
// for (var i=0; i< fruits.length; i++){
//     console.log(fruits[i]);
// }

// var flag = false;
// var fruitName = "orange";
// for (var i=0; i<fruits.length; i++){
//     console.log(fruits[i]);
//     if(fruits[i] === fruitName){
//         flag = true;
//     }
// }
// console.log(flag);
// if(flag==false){
//     console.log(fruitName, " not available");
// }else{
//     console.log(fruitName, " Stock available");
// }
// var arr= [343,98989];

// function findMax(arr){
//     var max = arr[0];
//     if (arr[1]>max){
//         max = arr[1];
//     }
//     return max;
// }
// console.log(findMax(arr));

var nums = [343,324324,,64,432,6,4,3241,324,];

// function findMax(nums){
//     var max = nums[0];
//     for(i=1; i<nums.length; i++){
//         if(nums[i]>max){
//             max=nums[i];
//         }
//     }
//     return max;
// }
// **find minum nums**
// function findMin(nums){
//     var min = nums[0];
//     for(i=1; i<nums.length; i++){
//         if(nums[i]<min){
//             min=nums[i];
//         }
//     }
//     return min;
// }
// console.log(findMin(nums));

function clickMe(){
    alert("You've clicked Here");
}


























































/////// Test /////
// var x = 3;
// var y=x++;
// var z=y++;

// console.log(x);
// console.log(y);
// console.log(z);