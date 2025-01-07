// if(true){
//     console.log("if block is executing");
// }
// if(false){
//     console.log("if block is executing");
// }

// let age = 15;

// if(age >= 18){
//     console.log("eligible for vote");
// }else{
//     console.log("not eligible")
// }

// let isAuthorised = false;

// if(isAuthorised == true){
//     console.log("welcome to payment page")
// }else{
//     console.log("please login first")
// }

// let hawk = true;
// if(hawk == true){
//     console.log("hawk tuah")
// }
// let day = prompt("Enter a number between 1 and 7") ;
// if(day == 1){
//     console.log("mon");
// }else if(day == 2){
//     console.log("tue");
// }else if(day == 3){
//     console.log("wed");
// }else if(day == 4){
//     console.log("thu");
// }else if(day == 5){
//     console.log("fri");
// }else if(day == 6){
//     console.log("sat");
// }else{
//     console.log("sun")
// }

// let day = Number(prompt("Enter a day number:"));
// console.log(typeof(day));
// switch(day){
//     case 1:
//         console.log("Mon");
//         break;
//     case 2:
//         console.log("tue");
//         break;
//     case 3:
//         console.log("wed");
//         break;
//     case 4:
//         console.log("thu");
//         break;
//     case 5:
//         console.log("fri");
//         break;
//     case 6:
//         console.log("sat");
//         break;
//     case 7:
//         console.log("sun");
//         break;
//     default:
//         console.log("Enter a number betweem 1 and 7");
//         break;
// }

//find the maximum number among the given values
//let a = 20
//let b = 30
//let c = 10

let a = Number(prompt("Enter the first number:")) ;
let b = Number(prompt("Enter the second number:")) ;
let c = Number(prompt("Enter the third number:")) ;
console.log("a" + a)
console.log("b" + b)
console.log("c" + c)
if(a > b && a > c){
    console.log("The bigger number is:"+a)
}else if(b > a && b > c){
    console.log("The bigger number is:"+b)
}else if(c > a && c > b){
    console.log("The bigger number is:"+c)
}else if(a = b && a > c){
    console.log("The bigger number is:"+a, b)
}else if(c = a && c > b){
    console.log("The bigger number is:"+c, a)
}else if(b = c && b > a){
    console.log("The bigger number is:"+c, b)
}else{
    console.log("All the numbers are equal")
}