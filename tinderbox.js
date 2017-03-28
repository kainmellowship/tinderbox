let witch = document.querySelector("#witch");
let soldier = document.querySelector("#soldier");
let tree = document.querySelector("#tree");
let dog = document.querySelector("#dog");
let chest = document.querySelector("#chest");
let buttonOne = document.querySelector("#buttonOne");
let music = document.querySelector("#music")

console.log("Let the fairytale begin!")
buttonOne.addEventListener("click", enterTree);


function enterTree(){
    console.log("Soldier enters tree");
    soldier.classList.add("enterTree");
}

soldier.addEventListener("animationend", removeClassEnterTree);

function removeClassEnterTree(){
    console.log("I have been called");
    soldier.classList.remove("enterTree");
}


