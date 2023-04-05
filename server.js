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