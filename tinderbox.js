///*java*//let witch = document.querySelector("#witch");
let soldier = document.querySelector("#soldier");
let tree = document.querySelector("#tree");
let dog = document.querySelector("#dog");
let chest = document.querySelector("#chest");
let ochest = document.querySelector("#ochest");
let buttonOne = document.querySelector("#buttonOne");
let music = document.querySelector("#music");
let buttonTwo = document.querySelector("#buttonTwo");


/*text*/
var myString = "Once upon a time there was a poor foot soldier walking along a path. He came across a witch standing by a tree, who told him that if he entered the tree he would face a dog guarding a chest filled with gold. The poor soldier was feeling brave, so he decided to climb down into the tree. !!CLICK TO COLLECT THE COINS!!";
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
console.log("shake the chest!");
buttonTwo.addEventListener("click", shakeChest);

function shakeChest(){
    console.log("Chest Shakes");
    chest.classList.add("shakeChest");
	chest.addEventListener("animationend",removeShakeChest);
}

function removeShakeChest(){
	console.log("i am being called");
	chest.style.display="none";
	ochest.style.display="block";
}
chest.addEventListener("openchest", openChest);

function openChest(){
    console.log("I have been called");
    chest.classList.add("openChest");
}

/*coins*/


        let coins = document.querySelectorAll(".coins img");
        let coinsClicked = 0;

        coins.forEach(makeMagic);

        function makeMagic(one){
            one.addEventListener("click", acoinsClicked);
        }
        function acoinsClicked(){
            this.classList.add("fade");
            console.log("i have been clicked", this);

            let picked=document.querySelectorAll(".fade");
            if(picked.length==3){
                console.log("3 flowers clicked");
            }
        }
