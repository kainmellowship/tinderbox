let witch = document.querySelector("#witch");
let soldier = document.querySelector("#soldier");
let tree = document.querySelector("#tree");
let dog = document.querySelector("#dog");
let chest = document.querySelector("#chest");
let buttonOne = document.querySelector("#buttonOne");
let music = document.querySelector("#music");
let buttonTwo = document.querySelector("#buttonTwo");


/*text*/
var myString = "Once upon a time there was a poor foot soldier walking along a path. He came across a witch standing by a tree, who told him that if he entered the tree he would face three dogs guarding chests filled with gold. The poor soldier was feeling brave, so he decided to climb down into the tree.";
var myArray = myString.split("");
var loopTimer;

function frameLooper(){
    if(myArray.length>0){
        document.getElementById("text").innerHTML +=myArray.shift();
    }
    else{
        clearTimeout(loopTimer);
    }
    loopTimer = setTimeout("frameLooper()",70);
}
frameLooper();

/*buttonOne*/
console.log("Let the fairytale begin!");
buttonOne.addEventListener("click", enterTree);


function enterTree(){
    stop();
    console.log("Soldier enters tree");
    soldier.classList.add("enterTree");
}

soldier.addEventListener("animationend", removeClassEnterTree);

function removeClassEnterTree(){
    console.log("I have been called");
    soldier.classList.remove("enterTree");
}
/*chest*/
console.log("Open the chest!");
buttonTwo.addEventListener("click", openChest);

function openChest(){
    console.log("Chest Opens");
    chest.classList.add("openChest");
}

chest.addEventListener("animationend", removeClassOpenChest);

function removeClassOpenChest(){
    console.log("I have been called");
    chest.classList.remove("openChest");
}


