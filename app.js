let gameSeq=[];
let userSeq=[];

let btns= ["yellow", "red" , "green", "purple"]

let started = false;
let level =0;

let h2= document.querySelector("h2");

document.addEventListener("Keypress", function(){
    if(started == false){
    console.log("game started");
    started = true;

    levelUp();
    }
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    }, 250)
}
function gameFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash")
    }, 250)
}


    function levelUp(){
    level++;
    h2.innerText = `level ${level}`;

    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);    

    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}
function checkAns(){
    console.log("curr level : ", level);
}

function btnPress(){
    console.log(this);
    let btn=this;
    userFlash(btn);

    userColor=btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns();
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress)
}