const h1 = document.querySelector('h1');
h1.innerText = "Goodbye World!";

const allLis = document.querySelectorAll('li');

const myColors = ['red', 'green', 'blue', 'yellow'];

for(let i = 0; i < myColors.length; i++) {
    allLis[i].style.backgroundColor = myColors[i];
};

const addItems = document.querySelector("#addItems");
const itemsUl = document.querySelector("#items");

addItems.addEventListener('keypress', function(e) {
    if(e.key === "Enter") {
        const lis = document.createElement('li');
        lis.innerText = this.value;
        itemsUl.append(lis);
        this.value = '';
    }
});

const form = document.querySelector("#signUpForm");

const creditCard = document.querySelector("#cc");
const checkBox = document.querySelector("#cb");
const veggies = document.querySelector("#veggies");

form.addEventListener('submit', function(e) {
    console.log('cc', cc.value);
    console.log('checkbox', cb.checked);
    console.log('veggie', veggie.value);
    e.preventDefault();
});



