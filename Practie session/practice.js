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

// 27th April

// Q1
// var array = [1,2,3,4,54,654];

// var sum = 0;
// for(var i=0; i<array.length; i++){
//     // console.log();
//     sum+=array[i]
// }
// console.log(sum);

// Q2

// var array = [1,2,45,4,45,46,76,7];
// var max = array[0];

// for(var i=0; i<array.length; i++){
//     if(array[i]>max){
//         max = array[i]
//     }
// }
// console.log(max);

// Q3
// var array = [2,4,56,76,76,8,988,4];
// var min = array[0];

// for(var i=0; i<array.length; i++){
//     if(array[i]<min){
//         min = array[i];
//     }
// }
// console.log(min);

// Q4
// var array = [1,2,3,4,5,6,7,8,9];

// var even = [];

// for(var i=0; i<array.length; i++){
//     if(array[i]%2 ==0){
//         // console.log(array[i]);
//         even.push(array[i]);
//     }
// }
// console.log(even);

// Q5
// var array = [1,2,3,4,5,6,7,8,9];
// var odd = [];

// for(var i=0;i <array.length; i++){
//     if(array[i]%2 != 0){
//         odd.push(array[i]);
//     }
// }
// console.log(odd);

// Q6
// var array = [1,2,3,4,5,6,7,8,9];
// var sum = 0;
// var average = [];
// for(var i=0; i<array.length; i++){
//     // sum=+array[i];
//     sum = sum+array[i];
// }
// average.push(sum/array.length);
// console.log(average);

// Q7
// var array = [10,20,3,40,50,6,70,8,];
// var value = 10;
// var greater = [];
// function great(a){
//     for(i=0; i<a.length; i++){
//         if(value<a[i]){
//             greater.push(a[i]);
//         }
//     }
//     return greater;
// }
// ans = great(array);
// console.log(ans);

// Q8
// var array1 = [2,3,4,6,7,8,9,956,43, 3];
// var array2 = [1,3,4,6,45,7,9,97,43];

// var common = [];

// console.log(array1)

// for(var i=0; i<array1.length; i++){
//     for(var j=0; j<array2.length; j++){
//         if(array1[i]==array2[j]){
//             common.push(array2[j]);
//         }
//     }
// }
// console.log(common);
// console.log(common);

// function similar(a1,a2){
//     for(var i=0; i<a1.length; i++){
//         for(var j=0; j<a2.length; j++){
//             if(a1[i]==a2[j]){
//                 common.push(a2[j])
//             }
//         }
//     }
//     return common;
// }
// var ans = similar(array1,array2);
// console.log(ans);

// Q9
// var array = [1,2,3,4,5,6,7,8,9];
// var revr = [];

// function reverse(a){
//     for(var i=a.length-1; i>=0; i--){
//         revr.push(i);
//     }
//     return revr;
// }
// var ans = reverse(array);
// console.log(ans);

// Q10
// var array = [1,2,3,4,5,6,7,8,9];
// var sum = 0;
// var cSum = [];

// function cumulative(a){
//     for(var i=0; i<a.length; i++){
//         sum = sum+a[i];
//         cSum.push(sum);
//     }
//     return cSum;
// }
// var ans = cumulative(array);
// console.log(ans);

// Q*
// var arr1 = [1,2,3,4,5,6,7,8,9];
// var arr2 = [4,5,6,7,8,9,1,2,3];
// var newarr = [];

// if(arr1.length == arr2.length){
//     for(i=0; i<arr1.length; i++){
//         newarr[i] = arr1[i]+arr2[i];
//     }
//     console.log(newarr);
// }

// for(j=0; j<arr2.length; j++){

// }
// console.log(newarr);

// Q1
// var array = [34,45,65,23,10,676,34,39];
// var target = 68;
// var flag = true;
// for(i=0; i<array.length; i++){
//     for(j=array.length-1; j>0; j--){
//         if((array[i]+array[j]) == target){

//             console.log(array[i]);
//         }else{
//             console.log("not found");
//         }
//     }
// }

// Q2

// var start = 5799;
// var end = 78659;
// var sum = 0;

// for(i=start; i<end; i+=3){
//     // console.log(i);
//     sum= sum +i;
// }
// console.log(sum);

// Q3
// var num =19;
// var array = [3,5,79,45,0,-67,23,77,19,78,12];

// for(i=0; i<array.length; i++){
//     if(array[i] == num){
//         // console.log("found");
//     }else{
//         console.log("Not Found");
//     }
// }
// for(i=0; i<array.length; i++){
//     var table = array.length;
//     var multi = table*array[i];
//     console.log(multi);
// }

// Q4
// var array = [34,45,567,78,89,34,67,87,34,78,89];
// var obj= {};
// // var samp;
// for(i=0; i<array.length; i++){
//     console.log(i, ":", array[i])
//     // obj.push();
//     obj[i] = array[i];
// }
// console.log(obj)

// var array = ["mon", "Tuesday", "Wednesday", "Thursday", "Friday", "Sat", "Sun"];
// var num = 1;
// switch (1) {
//   case 1:
//     console.log(array[0]);
//     break;
//   case 1:
//     console.log(array[1]);
//     break;
//   case 2:
//     console.log(array[2]);
//     break;
//   case 3:
//     console.log(array[3]);
//     break;
//   case 4:
//     console.log(array[4]);
//     break;
//   case 5:
//     console.log(array[5]);
//     break;
//   case 6:
//     console.log(array[6]);
//     break;
//   default:
//     console.log("invalid input");
//     break;
// }

// Q1
// var array = [34,45,65,23,10,676,34,39];
// var target = 68;
// var flag = false;
// for(i=0; i<array.length; i++){
//   for(j=array.length-1; j>i; j--){
//     if(array[i]+array[j] == target){
//       flag=true;
//       console.log(array[i], array[j]);
//     }
//   }
// }
// if(flag){
//   return true;
// }else{
//   console.log("Not found");
// }

// Q2
// var start = 5799;
// var end = 78659;
// var sum=0;

// for(i=start; i<=end; i= i+3){
//   sum+=i;
// }
// console.log(sum);

// Q3
// var number =19;
// var array = [3,5,79,45,0,-67,23,77,19,78,,12];
// var flag = false;
// for(i=0; i<array.length; i++){
//   if(array[i]==number){
//     flag = true;
//   }
// }
// if(flag){
//   for(i=0; i<array.length; i++){
//     console.log(i*array.length);
//   }
// }else{
//   console.log("not found");
// }

// Q4
// var array=[34,45,567,78,89,34,67,87,34,78,89];
// var obj={};
// for(i=0; i<array.length; i++){
//   obj[i]= array[i];
// }
// console.log(obj);

// Q1\
// var array=[1,2,3,4,5,6,7,8,9];
// var sum=0;
// for(i=0; i<array.length;i++){
//     sum= sum+array[i];
// }

// console.log(sum);

// Q2
// var array = [1,23,3,567,87,8,78,8];
// var max = array[0];

// for(i=0; i<array.length; i++){
//   if(array[i]>max){
//     max=array[i];
//   }
// }
// console.log(max);

// Q3
// var array = [1,23,3,567,87,8,78,8];
// var min = array[0];

// for(i=0; i<array.length; i++){
//   if(array[i]<min){
//     min=array[i];
//   }
// }
// console.log(min);

// Q4
// var array=[1,2,3,4,5,6,7,8,9];
// var even = [];
// for(i=0; i<array.length; i++){
//   if(array[i]%2==0){
//     even.push(array[i]);
//   }
// }
// console.log(even);

// Q5
// var array=[1,2,3,4,5,6,7,8,9];
// var odd = [];
// for(i=0; i<array.length; i++){
//   if(array[i]%2 !=0){
//     odd.push(array[i]);
//   }
// }
// console.log(odd);

// Q6
// var num = [1,2,3,4,6,67,9];
// var average;
// var sum=0;

// for(i=0; i<num.length; i++){
//   // sum+=i;
//   sum = sum + num[i];
//   average = sum/num.length;
// }
// console.log(average);

// Q7
// var array = [1,3,45,5,67,89,90,45];
// var com = 5;
// var newarray = [];

// for(i=0; i<array.length; i++){
//   if(array[i]>com){
//     newarray.push(array[i])
//   }
// }
// console.log(newarray);

// 29th April;
// Q1
// var array = [1,2,3,4,5];

// for(var i=0; i<array.length; i++){
//     console.log(array[i]);
// }

// Q2
// var array = [1,2,3,4,5,6,7,8,9,55];
// var sum = 0;
// for(var i=0; i<array.length; i++){
//     sum +=array[i];
// }
// console.log(sum);

// Q3
// var array = [2,345,6778,9,54,5,6];
// var max = array[0];

// for(var i=1; i<array.length; i++){
//     if(array[i]>max){
//         max = array[i];
//     }
// }
// console.log(max);

// Q4
// var array = [1,23,45,56,6,10,34,23,56,22,22,23,10,3,4];
// var flag = false;
// var temp;
// for(var i=0; i<array.length; i++){
//     if(array[i]==10){
//         flag = true;
//         temp = i;
//         break;
//     }
// }
// if(flag){
//     console.log(temp);
// }

// Q5
// var array = [1,23,45,56,6,10,34,23,56,22,22,23,10,3,4,45,45,45,45,6];
// var average;
// var sum = 0;

// for(var i=0; i<array.length; i++){
//     sum = sum + array[i];
//     average = sum/array.length;
// }
// console.log(average);

// Q6
// var array = [1,23,45,56,5,10,34,23,56,22,22,23,10,3,4,45,45,45,45,5,4,34,34,78,34];
// var empt = [];
// var target = 5;
// for(var i=0;i<array.length;i++){
//     if(array[i]==target){
//         empt.push(i);
//     }
// }
// console.log(empt[empt.length-1]);

// var array = [1,23,45,56,5,10,34,23,56,22,22,23,10,3,4,45,45,45,45,5,4,34,34,78,34];

// for(var i = array.length-1; i>0; i--){
//     if(array[i]==5){
//         console.log(i);
//         break;
//     }
// }

// Q7
// var array =[1,2,3,4,5,6,7,8,9,10,11,12];
// var prod = 1;

// for(var i=0; i<array.length; i++){
//     prod = prod * array[i];
// }
// console.log(prod);

// Q8
// var array = [2,33,45,56,65,322,1,23];
// var min = array[0];

// for(var i=1; i<array.length; i++){
//     if(array[i]<min){
//         min = array[i];
//     }
// }
// console.log(min);

// Q9
// var array = [1,2,34,45,56,56];
// var num = 2;
// var flag = false;
// for(var i=0; i<array.length; i++){
//     if(array[i]==num){
//         flag=true;
//     }
// }
// if(flag){
//     console.log(num, " is found.");
// }else{
//     console.log("not found");
// }

// Q10
var array = [2, 1, 4, 5, 3, 6, 7, 9, 8];
var min = array[0];
var arr = [];

for (var i = 0; i < array.length; i++) {
  for (var j = 0; j < array.length - 1; j++) {
    if (array[i] < min) {
      min = array[i];
    }
  }
}


// Q11
// var array =[2.2, 2,3,4.5];
// console.log(array[0]+array[array.length-1]);

// Q12

// var num = 'krish';

// for(var i = num.length-1; i>=0; i--){
//     console.log(num[i]);
// }

// var users = ['krish', 'abhishek', 'vrushab'];
// for(var i=0; i<users.length; i++){
//     for(var j = users[i].length-1; j>0; j--){
//         console.log(users[j]);
//     }
// }

// Q13
// var array = [1,2,3,4,5,6,7,8];
// for(var i=0; i<array.length; i++){
//     if(array[i]%2==0){
//         console.log(array[i]);
//     }
// }

// Q14
// var array = [1,2,3,4,5,6,7,8,9,10];
// for(var i=0; i<array.length; i++){
//     if(array[i]%2==0){
//         array[i] = 0;
//     }
// }
// console.log(array);

// Q15
// var arr1 = [1,2,3,4,5,6];
// var arr2 = [5,6,7,8,9,1];

// for(var i=0; i<arr1.length; i++){
//     for(var i=0; i<arr2.length; i++){
//         console.log(arr1[i]+arr2[i]);
//     }
// }

// var a = [10,92,90,8,55,61,27,38,1];
// var min = a[0];
// var b = [];
// for(i=0; i<a.length; i++){
//     if(a[i]<min){
//         min = a[i];
//     }
// }console.log(min);

// console.log(arr1[i]+arr2[j]);
