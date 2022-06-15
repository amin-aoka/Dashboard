let carts = document.querySelector(".carts");
let mainSection = document.querySelector(".main-section")
let rightAside = document.querySelector(".right-aside")
let people = document.querySelector(".people")
let user = document.querySelector(".user")
let userImage = document.querySelector("#userimg")
let header= document.querySelector(".header")
let theme= document.querySelector(".theme")
let topy= document.querySelector(".top")


window.addEventListener("resize", function (){

    if (window.matchMedia("(max-width:600px)").matches){
        mainSection.appendChild(carts);
        mainSection.appendChild(people);
        header.appendChild(theme)
        header.appendChild(userImage)
    }else if(window.matchMedia("(min-width:600px)").matches){
       rightAside.appendChild(carts);
       rightAside.appendChild(people);
       topy.appendChild(theme)
       user.appendChild(userImage)
    }
    })
