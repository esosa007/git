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