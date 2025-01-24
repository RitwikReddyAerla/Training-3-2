//document.getElementBy("")

// let element = document.getElementById("demo");
// element.innerText = "DOM";
// console.log(element);

// let div = document.getElementById("text");
// div.innerText = "<h1>hi</h1>";
// div.innerHTML = "<h1>hi</h1>";

// let ele = document.getElementsByClassName("test");
// console.log(ele);
// console.log(Array.isArray(ele));
// ele[0].style.backgroundColor="yellow";

//spread operator : it is used to take out each and every value from the original array and store it in one more new array
//syntax :  [...variable]
// let x = [...ele]
// console.log(x);
// console.log(Array.isArray(x));
// x.map((element) => {
//     console.log(element);
//     // element.style.backgroundColor = "teal";
// })

// document.getElementByTagName
// let ele = document.getElementsByTagName("div");
// console.log(ele);

// document.getElementsByName()
// let nam = document.getElementsByName("username");
// console.log(nam);
// let n = [...nam]
// n.map(element =>{
//     element.style.backgroundColor="blue";
// })

// let elem = document.querySelector(".text");
// console.log(elem);

// let ele = document.querySelectorAll(".test");
// let x = [...ele].map(element => {
//     console.log(element.innerText);
// })


//events
// let btn = document.getElementById("btn");
// btn.addEventListener("events", callbackfn)
// btn.addEventListener("click",() => {
//     console.log("button clicked");
//     document.body.style.backgroundColor="blue";
// })

// btn.addEventListener("dblclick",() => {
//     console.log("double clicked");
//     document.body.style.backgroundColor="purple";
// })

// btn.addEventListener("mouseover",() => {
//     console.log("double clicked");
//     document.body.style.backgroundColor="purple";
// })

// btn.addEventListener("mouseleave",() => {
//     console.log("double clicked");
//     document.body.style.backgroundColor="white";
// })

let inp = document.querySelector("#inp");
inp.addEventListener("keydown", () => {
    console.log("down");
})