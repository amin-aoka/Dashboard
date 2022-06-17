let carts = document.querySelector(".carts");
let mainSection = document.querySelector(".main-section")
let rightAside = document.querySelector(".right-aside")
let people = document.querySelector(".people")
let user = document.querySelector(".user")
let userImage = document.querySelector("#userimg")
let header= document.querySelector(".header")
let theme= document.querySelector(".theme")
let topy= document.querySelector(".top")
let menu = document.querySelector(".menu")
let leftAside = document.querySelector(".left-aside")
let menuStatus =0
let Mclose = document.querySelector(".close")
let light=document.querySelector(".light")
let dark = document.querySelector (".dark")
let body = document.querySelector("body")
let cart = document.querySelectorAll(".cart")
let statusBox = document.querySelectorAll(".status-box");
let table = document.querySelector("table");
let h4s = document.querySelectorAll(".info h4")
let sbh1 = document.querySelectorAll (".status-box h1")
let sbh3 = document.querySelectorAll (".status-box h3")
let cartsh2 = document.querySelector(".carts h2");
let rightAsideh2=document.querySelector(".right-aside h2")
let mainSectionh1=document.querySelector(".main-section h1")
let mainSectionh2=document.querySelector(".main-section h2")
let newcart=document.querySelector(".new");
let active=document.querySelector("#active")
let logoh2 = document.querySelector (".logo h2");



window.addEventListener("resize", function (){

    if (window.matchMedia("(max-width:600px)").matches){
        mainSection.appendChild(carts);
        mainSection.appendChild(people);
        header.appendChild(theme)
        header.appendChild(userImage)
        leftAside.style.transform="translateX(-19rem)"
        let menuStatus =0
        console.log(menuStatus)


    }else if(window.matchMedia("(min-width:600px)").matches){
       topy.appendChild(theme)
       user.appendChild(userImage)
       rightAside.appendChild(people);
       rightAside.appendChild(carts);
       leftAside.style.transform="translateX(0rem)"
       Mclose.style.display="none";
       console.log(menuStatus)
    }
    })
menu.addEventListener("click",function (){
    console.log("clicked me")
    menuStatus==0
    leftAside.style.transform="translateX(0rem)"
    Mclose.style.display="block";
    menuStatus=1
    console.log(menuStatus)
    })
Mclose.addEventListener("click",function(){
    leftAside.style.transform="translateX(-19rem)"
    menuStatus=0
    console.log(menuStatus)
})
dark.addEventListener("click", function(){
    body.style.background="black";
    body.style.color="white";
    people.style.boxShadow="none";
    people.style.background="#202528";
    cart.forEach(wholy);
    statusBox.forEach(wholy);
    table.style.background="#202528"
    table.style.boxShadow="none"
    h4s.forEach(wholy);
    sbh1.forEach(wholy);
    sbh3.forEach(wholy);
    cartsh2.style.color="white";
    rightAsideh2.style.color="white";
    mainSectionh1.style.color="white";
    mainSectionh2.style.color="white"
    newcart.style.boxShadow="none";
    active.style.background="#202528";
    dark.style.background = "#7380ec"
    header.style.boxShadow="none"
    header.style.background="#202528";
    logoh2.style.color="white";
    leftAside.style.background="black";
})

function wholy(item,index,arr){
    item.style.background="#202528";
    item.style.color="white";
    item.style.boxShadow="none";

    
}