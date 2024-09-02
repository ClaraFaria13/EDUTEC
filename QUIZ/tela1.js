document.addEventListener("DOMContentLoaded", function () {
    const questionElement = document.getElementById("pergunta");
    const buttons = Array.from(document.querySelectorAll("button[id^='resposta']"));
    let currentQuestionIndex = 0;
    let correctAnswers = 0;

    fetch('dados.json')
        .then(response => response.json())
        .then(data => {
            const quizData = data.quizzes[0].questions;
            showQuestion(quizData[currentQuestionIndex]);

            buttons.forEach(button => {
                button.addEventListener("click", function () {
                    checkAnswer(this, quizData[currentQuestionIndex].answer);
                });
            });

            function showQuestion(questionData) {
                questionElement.textContent = questionData.question;
                buttons.forEach((button, index) => {
                    button.textContent = questionData.options[index];
                    button.classList.remove("correct", "incorrect"); 
                    button.disabled = false; 
                });
            }

            function checkAnswer(button, correctAnswer) {
                const userAnswer = button.textContent;
                if (userAnswer === correctAnswer) {
                    button.classList.add("correct");
                    correctAnswers++;
                } else {
                    button.classList.add("incorrect");
                    buttons.forEach(btn => {
                        if (btn.textContent === correctAnswer) {
                            btn.classList.add("correct");
                        }
                    });
                }

                
                buttons.forEach(btn => btn.disabled = true);

                
                setTimeout(() => {
                    currentQuestionIndex++;
                    if (currentQuestionIndex < quizData.length) {
                        showQuestion(quizData[currentQuestionIndex]);
                    } else {
                        showResult();
                    }
                }, 3000);
            }

            function showResult() {
                setTimeout(() => {
                    window.location.href = 'telafi.html';
                }, 3000); 
            }
        })
        .catch(error => console.error('Erro ao carregar dados do JSON:', error));
});
