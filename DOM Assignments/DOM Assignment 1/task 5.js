//Task-5 

let vv=document.querySelector("ul");

let gf=vv.getElementsByTagName("li");

gf[2].innerText="Projects";

let abc=document.querySelector(".hero-right-section-btns")

let but=document.createElement("button");

but.innerText="Support Me";

abc.appendChild(but);