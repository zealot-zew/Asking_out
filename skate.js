let counter = createCounter();
let listOfBlackmails = ["dont you wanna come?", "smh get yo fadass up!", "so adamant ", "Last chance", "Im gonna hack you"]

function makeButtonBigger() {
    i = counter()
    document.getElementsByClassName("scale-up")[0].style.transform = `scale(${1 + i * 10})`;
    document.getElementsByClassName("scale-down")[0].style.transform = `scale(${1 - i * 0.2})`;
    addRandom(listOfBlackmails[i - 1]);

}

function yupie() {
    document.querySelector("h4").textContent = "You're so osm ^^ "
    document.getElementsByClassName("button-container")[0].remove();
    document.querySelectorAll("h4")[1].remove();
    showConfetti();
}

function createCounter() {
    let count = 0;
    return function () {
        count++;
        return count;
    }
}

function addRandom(quote) {
    document.querySelectorAll("h4")[1].textContent = quote;
}

function showConfetti() {
    const confettiSettings = {
        target: 'confetti-canvas',
        respawn: true,
        VideoColorSpace: ['#FC8EAC', '#FFC1CC', '#FF6EC7'],
    };
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();

    // Clear the confetti after 5 seconds
    setTimeout(() => {
        confetti.clear();
    }, 100000);
}