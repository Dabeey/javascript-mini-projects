const countEl = document.getElementById("count");
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");

let count = 0;

incrementBtn.addEventListener("click", () => {
    count++;
    countEl.textContent = count;
});

decrementBtn.addEventListener("click", () => {
    if (count > 0) count--; // Prevent negatives
    countEl.textContent = count;
});