//Task-3

let a= document.querySelector(".hero-left-section ");
let b= a.getElementsByTagName("span");

b[3].innerText="iNeuron Intelligence Pvt Ltd"

let gg=document.querySelector("ul");

let li=document.createElement("li");
li.innerText="Projects"
gg.replaceChild(li,gg.lastElementChild);