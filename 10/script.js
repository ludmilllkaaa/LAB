function checkAnswers() {
    const correct = {
        q1: "1",
        q2: "1",
        q3: "1",
        q4: "-1",
        q5: "0.5"
    };

    let score = 0;

    for (let key in correct) {
        const answer = document.querySelector(`input[name="${key}"]:checked`);
        if (answer && answer.value === correct[key]) {
            score++;
        }
    }

    const resultDiv = document.getElementById("result");
    resultDiv.style.display = "block";
    resultDiv.textContent = `Ваш результат: ${score} / 5`;
}
