let gameSeq=[];
let userSeq=[];
let btns=["yellow","red","purple","green"];

let started=false;
let level=0;
let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
       console.log("'Game is started");
        started=true;
        levelUp();
    }
});

function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },300);

}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },300);

}

function levelUp(){
    userSeq=[];
    level++;

h2.innerText=`level ${level}`;
// random button choose
let randIdx=Math.floor(Math.random()*3);
let randColor=btns[randIdx];
let randBtn=document.querySelector(`.${randColor}`);

gameSeq.push(randColor);
console.log(gameSeq);
gameflash(randBtn);


}
function checkAns(idx){

   if (userSeq[idx]==gameSeq[idx]){
    if(userSeq.length==gameSeq.length){
        setTimeout(levelUp,1000);
    }
    
   }else{
    h2.innerHTML=`Game over! Your score is <b>${level}</b> <br> press any key to start.`;
   document.querySelector("body").style.backgroundColor="red";
   setTimeout(function(){
    document.querySelector("body").style.backgroundColor="white";
   },200);

    reset();
   }
 }

function btnPress(){
 
    let btn=this;
    userflash(btn);

userColor=btn.getAttribute("id");
 userSeq.push(userColor);

 checkAns(userSeq.length-1);
}
let allBtns= document.querySelectorAll(".btn")
 for(btn of allBtns){
    btn.addEventListener("click",btnPress);
 }

 function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
 }

