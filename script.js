const pics =document.querySelectorAll(".pic ");
const pit = document.querySelector(".pit");
const show= document.querySelector(".show");


for (const p of pics){
    p.addEventListener('dragstart',dragStart);
    p.addEventListener('dragend',dragEnd);
}
pit.addEventListener('dragover',dragOver);
pit.addEventListener('dragenter',dragEnter);
pit.addEventListener('dragleave',dragLeave);
pit.addEventListener('dragDrop',drop);


var hold;
function dragStart(e){
    console.log("start ",e.target.className);
    hold=e.target.className;
}

function dragEnd(e){
    e.preventDefault();
    console.log(e.target.className);
    this.className +=e.target.className;
}

function dragOver(e){
    console.log("dragOver",e.target.className);
}

function dragEnter(e){
    console.log("dragEnter",e.target.className);
}

function dragLeave(e){
    console.log("dragLeave",e.target.className);
    this.className = 'pit'
    this.className +=' '+hold;
}

function drop(e){
    console.log("dropped",e);
}