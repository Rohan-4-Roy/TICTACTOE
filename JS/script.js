console.log("Welcome to Tic Tac Toe")
let music=new Audio("music.mp3")
let audioturn=new Audio("ting.mp3")
let gameover=new Audio("gameover.mp3")
let turn="X"
let isgameover=false
const changeTurn = ()=>{
    return turn === "X"? "0": "X"
}
music.play();
function checkWin(){   
    let boxtext=document.getElementsByClassName("boxtext")
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]
    wins.forEach(e=>{
        if((boxtext[e[0]].innerText==boxtext[e[1]].innerText)&&(boxtext[e[0]].innerText==boxtext[e[2]].innerText)&&boxtext[e[0]].innerText!="")
        {   
            isgameover=true
            
            document.querySelector('.info').innerText=boxtext[e[0]].innerText+" Won " +"\n"+"Press Reset"
            document.getElementById('win').style.width="200px"
            gameover.play()
          
        }
    })
}

function checkTie(){
    let boxtext=document.getElementsByClassName("boxtext")
    let count=0;
    Array.from(boxtext).forEach(element=>{
        if(element.innerText=="X"||element.innerText=="O")
        {
            count++;
        
        }

    })
    if(count==5){
        document.querySelector('.info').innerText="It's a Tie";
        isgameover=true
    }
}


let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxtext=element.querySelector(".boxtext")
    element.addEventListener('click',()=>{
        if(boxtext.innerText==""){
        boxtext.innerText=turn
        turn=changeTurn()
        audioturn.play()
        checkWin()
        if(!isgameover){
            checkTie();
            if(!isgameover)
            document.getElementsByClassName("info")[0].innerText="Turn for "+turn
        }
    }
    })
})
reset.addEventListener('click',()=>{
    let boxtext=document.getElementsByClassName("boxtext")
    Array.from(boxtext).forEach(e=>{
        e.innerText=""
    })
    turn='X'
    document.getElementsByClassName("info")[0].innerText="Turn for "+turn
    isgameover=false
    document.getElementById("win").style.width="0px"

})
