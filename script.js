const containerMain = document.querySelector(".container");
const containerGreeting = document.querySelector(".container_greeting");
const submitButton = document.getElementById("submit");
const rateAgain = document.getElementById("rate-again");

const chosenRating = document.getElementById("chosen");
const rates = document.querySelectorAll(".btn");

submitButton.addEventListener("click", () => {
    containerGreeting.classList.remove("hidden");
    containerMain.style.display = "none"
})

rateAgain.addEventListener("click", () => {
    containerGreeting.classList.add("hidden")
    containerMain.style.display = "block"
})

rates.forEach((rate) => {
    rate.addEventListener("click", () => {
        chosen.innerHTML = rate.innerHTML
    })
})