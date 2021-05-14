const fill = document.querySelectorAll(".draggable-cards");
const empties = document.querySelectorAll(".empty");

fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)

function dragStart () {
    console.log("drag started")
};

function dragEnd () {
    console.log("drag ended")
};

function dragOver () {
    console.log("drag over")
};

function dragEnter () {
    console.log("drag enter")
};

function dragLeave () {
    console.log("drag leave")
};

function dragDrop () {
    console.log("drag dropped")
};
