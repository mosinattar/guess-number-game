let randomNumber = Math.floor(Math.random() * 100) + 1;

let attempts = 0;

function checkGuess() {

    const input = document.getElementById("guessInput");
    const result = document.getElementById("result");
    const attemptsText = document.getElementById("attempts");

    const guess = Number(input.value);

    if (guess < 1 || guess > 100) {
        result.innerText = "⚠️ Enter a number between 1 and 100";
        result.style.color = "orange";
        return;
    }

    attempts++;

    attemptsText.innerText = "Attempts: " + attempts;

    if (guess < randomNumber) {

        result.innerText = "⬇️ Too Low!";
        result.style.color = "orange";

    } else if (guess > randomNumber) {

        result.innerText = "⬆️ Too High!";
        result.style.color = "red";

    } else {

        result.innerText = "🎉 Correct!";
        result.style.color = "green";

        alert(
            "🎉 Congratulations!\n\n" +
            "You guessed the number!\n" +
            "Total Attempts: " + attempts
        );
    }
}


function newGame() {

    randomNumber = Math.floor(Math.random() * 100) + 1;

    attempts = 0;

    document.getElementById("guessInput").value = "";

    document.getElementById("result").innerText =
        "Make your first guess!";

    document.getElementById("result").style.color = "#333";

    document.getElementById("attempts").innerText =
        "Attempts: 0";
}