var num1 = 1;
var num2 = 10;
var sum = 0;
var multi = 5;
var fact = 5;


// ***Q-1 Write a program to print numbers from 1 to 10.*** //

// function nums(start, end){
//     for(i = start; i<=end; i++){
//         console.log(i)
//     }
//     return i;
// }
// var ans = nums(num1, num2);
// console.log(ans);

// ***Q-2 Write a program to calculate the sum of first 10 natural number.*** //

// function sumNums(a,b){
//     if(a>0 && b>0){
//         for(i=a; i<=b; i++){
//             sum += i;
//         }
//     }
//     return sum;
// }
// var ans = sumNums(num1, num2);
// console.log(ans +" is the Sum of first 10 Natural numbers");

// if(num1>0 && num2>0){
//     for(i=num1; i<=num2; i++){
//         sum += i;
//     } 
//     console.log(sum);
// }else{
//     console.log("Invalid entry");
// }
// ???????????

// ***Q-3 Write a program that prompts the user to input a positive integer. It should then print the multiplication table of that number?*** //

// for(i=num1; i<=num2; i++){
//     console.log(multi*i);
// }

// function multiInt(a,b){
//     for(i=a; i<=b; i++){
//         console.log(i*multi)
//     }
//     // return i;
// }
// var ans = multiInt(num1, num2);
// console.log(ans);

// ***Q-4 Write a program to find the factorial value of any number entered through the keyboard. ?*** //

function factNum(a,b){
    for(i=a; i<=b; i++){
        fact*=i;
}
}

factNum(num1, fact);