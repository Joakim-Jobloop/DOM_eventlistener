// Viktig å kunne:
const toggleButton = document.getElementById("toggleButton")
const hiddenDiv = document.getElementById("hiddenDiv")

toggleButton.addEventListener("click", function() {
if (hiddenDiv.style.display === "none" || hiddenDiv.style.display === "") {
hiddenDiv.style.display = "block"
// 
} else {
    hiddenDiv.style.display = "none"
}
})


// Ekstra greier som er komplisert, men kjekt å kunne siden:
const movable = document.getElementById("movable");

let posX = 0;
let posY = 0;
const moveAmount = 10;
let currentSize = 50;
const sizeIncrement = 10;

function updateElement() {
movable.style.transform = `translate(${posX}px, ${posY}px)`
// setningen over betyr dette når koden kjøres første gang:
// `translate (0px, 0px)`
movable.style.width = `${currentSize}px`;
movable.style.height = `${currentSize}px`;
}

document.addEventListener("keydown", function(e) {
if  (e.key === "ArrowUp") {
posY -= moveAmount; 
} else if (e.key === "ArrowDown") {
    posY += moveAmount;
} else if (e.key === "ArrowLeft") {
    posX -= moveAmount;
} else if (e.key === "ArrowRight") {
    posX += moveAmount;
} else if (e.key === "Enter") {
    currentSize += sizeIncrement;
} else if (e.key === "Backspace") {
    currentSize -= sizeIncrement;
} 
updateElement();

})





