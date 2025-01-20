//without parameters and arguments
// function demo(){ //function declaration
//     console.log("Hello i am function demo()");
// }
// demo(); //this is function calling
// demo(); //this is function calling

//with parameters and arguments
// function add(a, b){
//     console.log(a+b);
// }
// add(1, 5);
// add(645, 1);
// add(50, -60);
// add(17, -80);

// console.log("Sub");
// function sub(a, b){
//     console.log(a-b);
// }
// sub(1,5);

// function addToCart(){
//     document.body.style.background="teal";
//     alert("Welcome to cart page");
// }
// addToCart();

// function isPalindrome(str){
//     let revstr = "";
//     for(let i =str.length-1; i>=0; i--){
//         // console.log(str[i]);
//         revstr += str[i];
//     }
//     if(str == revstr){
//         console.log(str+" is a Palindrome");
//     }else{
//         console.log(str+" is not a palindrome");
//     }
// }
// isPalindrome("madam");
// isPalindrome("sir");
// isPalindrome("malayalam");

// //Anonymous function
// function(){
//     console.log("Anonymous function");
// }//cannot be executed independently

//function expression
// let x = function(){
//     console.log("function expression");
// }
// // console.log(x);
// x();
// x();
// x();

//  IIFE
// (
//     function(){
//         console.log("IIFE");
//     }
// )();

// Arrow function
// let x = ()=>{console.log("Hello")}; //this has two special characters '(' and ')'
// x();
// let y = _ =>{console.log("Hello")}; //this only has a single special character '_' . So it is faster to executed. Hence performance is faster.
// y();

// let x = a=> console.log(a);
// x(10);

// let y = (a, b) => console.log(a+b);
// y(10, 5)

// let x = _ => {console.log("Hi");
//               console.log("Bye");
//               console.log("Heyu");
// }
// x();

//return -implicit and explicit

// function add(a, b){
//     console.log("before return");
//     return a+b;   //explicit return
// }
// // add(10, 5);
// let x = add(5,2);
// console.log(x);

// let x = (a, b) => a+b;      //implicit return in arrow function
// console.log(x(10, 30))  

// let y = (a, b) => {return a+b};
// console.log(y(10, 2));      //explicit return in arrow function\

//higher order function
// function hof(a){
//     return a();
// }
// let x = hof(10);
// let x = hof("insta");
// let x = hof([1, 2, 3, 4]);
// let x = hof(function(){return "This is a call back function."})
// console.log(x);
// console.log(x());

// let a = function(){
//     console.log("func exp");
// }
// console.log(a);
// console.log(a());

// function add(callback){
//     return callback;
// }
// let x = add(function(a, b){return a + b});
// console.log(x);
// console.log(x);

//let users = ["abc", "def", "ghi", "jkl", "mno"];
// console.log(users);
// console.log(users[0]);
// console.log(users[1]);
// console.log(users[2]);
// console.log(users[3]);
// console.log(users[4]);
// for(let i = 0; i < users.length; i++){
//     // console.log(i);
//     console.log(users[i]);
// }
// users.map((users) => {
//     console.log(users);
// });

// let a = users.forEach((users) => {
//     return (users);
// });
// console.log(a)

var a = 10;
var b = 30;
function x(){
    var user = "abc";
    let company = 'amz';
    const sal = 12345;
    console.log(user);
    console.log(company);
    console.log(sal);

    console.log(a, b)
}
x();