// let boxes=document.getElementsByClassName(".box");
let resetbtn=document.querySelector("#rest_btn");
let boxes = document.querySelectorAll(".box");
let newbtn=document.querySelector(".new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector(".msg");

let turnO=true;//if it is true O else X

const winPattern=[[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6], ];

const restGame=()=>{
    turnO=true;
    enableBtn();
    msgcontainer.classList.add("hide");
};

 // Selects elements with class 'box'
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        // console.log("box was clicked");
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;

      checkWinner();
    });
});
const disableBtn=()=>{
    for(box of boxes){
        box.disabled=true;
    }
};
const enableBtn=()=>{
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
const showWinner=(winner)=>{
    msg.innerText=`congratulations!!Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBtn();
};

const checkWinner = () => {
    for (const pattern of winPattern) {
       let pos1 = boxes[pattern[0]].innerText;
       let pos2 = boxes[pattern[1]].innerText;
       let pos3 = boxes[pattern[2]].innerText;
    if(pos1!="" && pos2!="" && pos3!=""){
        if(pos1==pos2 && pos2==pos3){
            //console.log("Winner!",pos1);
            showWinner(pos1);
        }
      }
    }
};
newbtn.addEventListener("click",restGame);
resetbtn.addEventListener("click",restGame);



