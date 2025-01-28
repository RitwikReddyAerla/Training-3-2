// let x = document.createElement("h1");
// x.innerText = "Dynamic creation of html element from js";
// x.id="demo";
// x.setAttribute("id", "demo");
// console.log(x);

// document.body.appendChild(x);

// let image = document.createElement("img");
// image.src = "burger.jpeg";
// console.log(image);

// document.body.appendChild(image);

// let form = document.querySelector("form");
// let name = document.getElementById("uname");
// let mail = document.getElementById("uemail");
// let pwd = document.getElementById("upwd");

// form.addEventListener("submit", (event) => {
//     event.preventDefault();
//     // console.log(event);
//     // console.log("form submitted");
//     // console.log(name.value);

//     let username = name.value;
//     let email = mail.value;
//     let password = pwd.value;
//     let userdetails = {
//         username : username,
//         email : email,
//         password : password
//     }
//     console.log(userdetails);
//     localStorage.setItem("userdetails".);
// })

// let mainele = document.createElement("div");
// mainele.setAttribute("class", "mainblock");
// console.log(mainele);

// let topele = document.createElement("div")
// topele.setAttribute("class", "topblock");
// // console.log(topele);

// let image = document.createElement("img");
// image.src = "image.jpeg";
// image.alt = "A beach";
// image.width = "100";
// image.height = "100";


// let bottomele = document.createElement("div");
// bottomele.setAttribute("class", "bottomblock");
// // console.log(bottomele);

// let h1 = document.createElement("h1");
// h1.innerText = "Heading";

// let btn = document.createElement("button");
// btn.innerText = "View More";

// bottomele.appendChild(h1);
// bottomele.appendChild(btn);
// topele.appendChild(image);
// mainele.appendChild(topele);
// mainele.appendChild(bottomele);
// document.body.appendChild(mainele);

let form=document.querySelector("form");
let username = document.getElementById("uname");

let password = document.getElementById("upass");
let check = document.getElementById("check");
let show = document.getElementById("show");


let gen = document.getElementsByName("gender");
// console.log(gen);

//hiding and showing password
check.addEventListener("click", event => {
    // console.log(event);
    if(event.target.checked == true){
        password.setAttribute("type", "text");
        show.innerText = "hide password";
    }else{
        password.setAttribute("type", "password");
        show.innerText = "show password";
    }
})

form.addEventListener("submit",event=>{
    event.preventDefault();
    let un = username.value;
    let up = password.value;
    // console.log(un , up);
    let gender = "";
   
   for(let i=0;i<=gen.length-1;i++){
    if(gen[i].checked == true){
        // console.log("true" , gen[i].value);
        gender += gen[i].value;
    }
   }
//    console.log(ele);
let userDetails={
    un,up,gender
};
console.log(userDetails);
})
