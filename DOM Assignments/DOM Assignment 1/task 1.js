//Task-1
let a= document.querySelector("ul");


let c= document.createElement("li");
c.textContent="Projects";
a.replaceChild(c,a.lastElementChild);

let b=document.createElement("li");
b.innerText="Hire Me";
a.appendChild(b);

let foot=document.getElementsByTagName('ul')[1];

foot.style.display="none";



