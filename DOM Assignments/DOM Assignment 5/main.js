// Adding Button
const container1 = document.querySelector(".nav-links").nextElementSibling;
console.log(container1);
const Subscription = document.createElement("a");
Subscription.setAttribute("href", "index.html");
Subscription.classList.add("btn");
Subscription.textContent = "Pro Subscription";

container1.append(Subscription);

//Adding Chinese
const container2 = document.querySelector(".tags-container :nth-child(2)");
console.log(container2);
const chinese = document.createElement("a");
chinese.setAttribute("href", "#");
chinese.textContent = "Chinese (7)";

container2.append(chinese);

//Adding Card
let newCard = document.createElement('div');
newCard.classList.add('card');
newCard.innerHTML = 'Card 6';

let cardParent = document.querySelector('.recipe-gallery');
cardParent.appendChild(newCard);