let witch = document.querySelector("witch");
let soldier = document.querySelector("soldier");
let tree = document.querySelector("tree");
let dog = document.querySelector("dog");
let chest = document.querySelector("chest");
let buttonOne = document.querySelector("#A");

buttonOne.addEventListener("click", buttonOne);

function buttonOne(){
    console.log("Soldier enters tree");
    soldier.classList.add("enterTree");
}



