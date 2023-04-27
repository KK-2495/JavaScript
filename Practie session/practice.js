// var n1 = 20;
// var n2 = 1;
// var n3 = 33;


// if(n1>n3 && n1>n3){
//     console.log(n1, "is largest");
// }
// else if(n2>n3 && n2>n1){
//     console.log(n2, "is largest");
// }
// else {
//     console.log(n3, "is largest");
// }


// if(n1<n3 && n1<n2){
//     console.log(n1, "is smallest");
// }
// else if(n2<n1 && n2<n3){
//     console.log(n2, "is smallest");
// }
// else if(n3<n1 && n3<n2){
//     console.log(n3, "is smallest");
// }


// var char = 'hkin';
// // console.log(char.length);
// if (char.length <5 ){
//     console.log("char is less than 5");
// }else if(char.length <10 ){
//     console.log("char is between 5-10");
// }else if(char.length>10) {
//     console.log("char i more than 10");
// }else{
//     console.log("invalid inpu")
// }

// var greet = "hello";

// if(greet == "hello"){
//     console.log("true");
// }else{
//     console.log("false");
// }
// Q.1

// var num1 = 88;
// var num2 = 334;

// function largeNum(a,b){

//     if(a>b){
//         return a;
//     }else{
//         return b;
//     }
// }
// var name = largeNum(num1, num2);
// console.log(name);


// Q.2

// num = 44;

// function numIdent(int){
//     if(int%2 == 0){
//         return "even";
//     }
//     else{
//         return "Odd";
//     }
// }
// var ans = numIdent(num);
// console.log(ans);

// Q.3
// var char = "krsd";

// function charLeng(KK){
//     if(char.length<5){
//         return "short";
//     }
//     else if(char.length<10){
//         return "medium";
//     }else if(char.length>10){
//         return "long";
//     }
// }
// ans = charLeng(char);
// console.log(ans);

// Q.4
// var num1 = 300;
// var num2 = 500;
// var num3 = 100;

// function range(a,b,c){
//     if(a<b && b<c){
//         return "increasing";
//     }else if(a>b && b>c){
//         return "decreasing";
//     }else{
//         return "neither"
//     }
// }
// var ans = range(num1, num2, num3)
// console.log(ans);

// Q.5
// var say = "hllo";

// function hello(hey){
//     if(hey == "hello"){
//         return "true";
//     }else{
//         return "false";
//     }
// }
// var ans = hello(say);
// console.log(ans);


// Q.6
// var array = [1,2,3,4,5,6,7,8,9];
// // var eg = 44;
// var sum=0;

// function sumEvenNum(a){
//     for(i=0; i<a.length; i++){
//         var div= a[i];
//         if(div%2==0){
//                 // console.log(div);
//                 // sum+=div;
//                 sum = sum+ div;
//             }
//         }
//         return sum;
// }
// var ans = sumEvenNum(array)
// console.log(ans);



// Q.7
// var num = 77;

// if(num%3 == 0 || num%7 == 0){
//     console.log("true");
// }else{
//     console.log("false");
// }

// function multiple(a){
// if(num%3==0 || num%7==0){
//     return "true";
// }
// else{
//     return "false";
// }
// }
// var ans = multiple(num);
// console.log(ans);

// Q.8
// var array = [2,3,4,1,5,6,7,8];

// var minNum = array[0];
// for(i=0; i<array.length; i++){
//     if(array[i]<minNum){
//         minNum = array[i];
//     }
// }
// console.log(minNum);

// Q3
// var num1 = 1;
// var num2 = 100;
// var sum = 0;
// function sumLoop(a,b){
// for(var i=a; i<=b; i++){
//     // console.log(i);
//     sum = sum + i
// }
// return sum;
// }
// ans = sumLoop(num1,num2);
// console.log(ans);

// Q4
// var table = 5;

// for(i=1; i<=10; i++){
//     var multi = i*table
//     // console.log(multi);
//     console.log(table, "*",i,"=",  multi)
// }


// Q6
// var name = "krish";
// var revName = "";

// for(var i=name.length-1; i>=0; i--){
//     // console.log(name);
//     revName = revName+name[i];
// }
// console.log(revName);

















// Q5
// var num = 12345;

// var revNum = 0;

// for(;num !== 0; num = Math.floor(num/10)){
//     revNum = revNum*10 + num%10;
// }
// console.log(revNum);

// var num = 12345;
// var revr = 0;
// for(;num!=0; num= Math.floor(num/10)){
//     // remainder = num%10;
//     revr = revr*10 + remainder; 
// }
// console.log(revr);
