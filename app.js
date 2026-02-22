var counter = document.getElementById("counter")
var incrementBtn = document.getElementById("incrementBtn")
var decrementBtn = document.getElementById("decrementBtn")
var resetBtn = document.getElementById("resetBtn")

var count = 0;

function updateCounter(){
    counter.textContent = count
}

incrementBtn.addEventListener("click", () => {
    count++;
    updateCounter();
});

decrementBtn.addEventListener("click", () => {
    count--;
    updateCounter();
});

resetBtn.addEventListener("click", () => {
    count = 0;
    updateCounter();
});