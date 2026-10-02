let randomNumber = Math.floor(Math.random() * 10) + 1;

function checkGuess() {
    const guess = document.getElementById("guess").value;

    if (guess == randomNumber) {
        document.getElementById("result").innerText = "Wow congrats you are correct! 🎉";
        document.getElementById("guess").value = "";
    } else {
        document.getElementById("result").innerText = "Random number was: " + randomNumber + 
        "\nTry Again. You can do it 💪";

    }
}