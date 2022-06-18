
let theme= document.querySelector(".theme")
let menu = document.querySelector("#menu")
let leftAside = document.querySelector(".left-aside")
let Mclose = document.querySelector(".close")
let light=document.querySelector(".light")
let body = document.querySelector("body")

menu.addEventListener("click",function (){
    leftAside.style.display="block";
    })
Mclose.addEventListener("click",function(){
    leftAside.style.display="none"
})
theme.addEventListener("click", function(){
    body.classList.toggle("dark-theme-variables")
    theme.querySelector('span:nth-child(1)').classList.toggle('active');
    theme.querySelector('span:nth-child(2)').classList.toggle('active');
})

