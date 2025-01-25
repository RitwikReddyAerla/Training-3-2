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

let form = document.querySelector("form");
let name = document.getElementById("uname");
let mail = document.getElementById("uemail");
let pwd = document.getElementById("upwd");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    // console.log(event);
    // console.log("form submitted");
    // console.log(name.value);

    let username = name.value;
    let email = mail.value;
    let password = pwd.value;
    let userdetails = {
        username : username,
        email : email,
        password : password
    }
    console.log(userdetails);
    localStorage.setItem("userdetails".);
})