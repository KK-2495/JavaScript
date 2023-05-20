// var arr =[1,2,3,4,5,6,7,8];
// var name = "swaraj";

// function ans(a,b){
//     var sum = 0;
//     for(i=0; i<=a.length; i++){
//         if(a[i]%2==0){
//             sum = sum + a[i];
//         }
        
//     }
//     console.log(`"${b}`,"=", `${sum}"`);
// }
// ans(arr,name);


var arr1 = [1,3,5,6,8,4];
var arr2 = [2,4,6,8,1,5];
// for(var i=0; i<arr2.length-1; i++){
//     var temp = arr1[i] + arr2[i+1];
//     sum.push(temp);
// }

// console.log(sum);
function rest(...a){
console.log(a);
}
rest(...arr1,...arr2);

// function restOp(...rest2){
//     var sum = [];
//     var temp;
//     for(var i=0;i<rest2.length-1;i++){
//         for(var j=0;j<rest2[i].length-1;j++){
//             temp=rest2[i][j] + rest2[i+1][j+1];
//             sum.push(temp);
//             break;
//         }
//     }
//     console.log(sum);

// }

// restOp(arr1, arr2);

// function sumDiv(n){
//     var sum=0;
//     for(var i=1;i<=n;i++){
//         if(i%3==0 || i%5==0 || i%7==0){
//             sum+= i;
//         }
//     }
//     console.log(sum);
// }

// sumDiv(10);

// var mat = [[1,0,1],[0,1,0]];
// var count=0;
// for(var i=0; i<mat.length; i++){
//     for(var j=0; j<mat[i].length; j++ ){
//         // console.log(mat[i][j]);
//         if(mat[0][j]==1){
//             // count++;
//             console.log(mat[0][j]);
//         }

//     }
// }
// console.log(count);



// var mat = [[1,0,1],[0,1,0]];

// function findMax(mat){
//     var maxCount = 0;
//     let maxIndex = -1;

//     for(var i=0;i<mat.length;i++){
//         var count = 0;
//         for(var j=0;j<mat[i].length;j++){
//             if(mat[i][j] === 1){
//                 count++;
//             }
//         }

//         if(count > maxCount){
//             maxCount = count;
//             maxIndex = i;
//         }
//     }

//     var empty = [];
//     empty.push(maxIndex,maxCount);
//     console.log(empty);


// }

// findMax(mat);
