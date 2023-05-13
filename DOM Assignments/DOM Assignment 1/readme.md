# Task-1 :- Output

![Project](./task1Output.png)

```
let a= document.querySelector("ul");


let c= document.createElement("li");
c.textContent="Projects";
a.replaceChild(c,a.lastElementChild);

let b=document.createElement("li");
b.innerText="Hire Me";
a.appendChild(b);

let foot=document.getElementsByTagName('ul')[1];

foot.style.display="none";

```

# Task-2 :- Output

![Project](./task2Output.png)

```

let a =document.querySelector("ul");
let b= a.getElementsByTagName("li");

b[2].innerText="Projects";

let abc=document.querySelector(".search-field input");
abc.placeholder="Search My Project";

let d= document.querySelector("footer ul");

d.style.display="none";
```

# Task-3 :- Output

![Project](./task3Output.png)

```

let a= document.querySelector(".hero-left-section ");
let b= a.getElementsByTagName("span");

b[3].innerText="iNeuron Intelligence Pvt Ltd"

let gg=document.querySelector("ul");

let li=document.createElement("li");
li.innerText="Projects"
gg.replaceChild(li,gg.lastElementChild);
```

# Task-4 :- Output

![Project](./task4Output.png)

```
let abc= document.querySelector(".hero-right-section img");

abc.setAttribute("src","https://hiteshchoudhary.com/static/a8d73d1aac4c79e9bb689640e6090367/2eaab/person-image.jpg");

let vv=document.querySelector("ul");

let gf=vv.getElementsByTagName("li");

gf[2].innerText="Projects";
```

# Task-5 :- Output

![Project](./task5Output.png)

```
let vv=document.querySelector("ul");

let gf=vv.getElementsByTagName("li");

gf[2].innerText="Projects";

let abc=document.querySelector(".hero-right-section-btns")

let but=document.createElement("button");

but.innerText="Support Me";

abc.appendChild(but);
```
