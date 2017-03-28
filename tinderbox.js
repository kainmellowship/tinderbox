let witch = document.querySelector("witch");
let soldier = document.querySelector("soldier");
let tree = document.querySelector("tree");
let dog = document.querySelector("dog");
let chest = document.querySelector("chest");
let A = document.querySelector("#A");

console.log("Let the fairytale begin!")
A.addEventListener("click", enterTree);


function enterTree(){
    console.log("Soldier enters tree");
    soldier.classList.add("enterTree");
}



