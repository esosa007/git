const h1 = document.querySelector('h1');
h1.innerText = "Goodbye World!";

const allLis = document.querySelectorAll('li');

for(let lis of allLis) {
    console.log(lis);
}

const myColors = ['red', 'green', 'blue'];

for(let i = 0; i < myColors.length; i++) {
    allLis[i].style.backgroundColor = myColors[i];
};