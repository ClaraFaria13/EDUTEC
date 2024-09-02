function navegarPara(pagina) {
    window.location.href = pagina;
}

document.addEventListener('DOMContentLoaded', function () {
    const correctAnswers = localStorage.getItem('correctAnswers');
    const incorrectAnswers = localStorage.getItem('incorrectAnswers');
    const scorePercentage = localStorage.getItem('scorePercentage');

    if (correctAnswers !== null) {
        document.querySelector('.lista li:nth-child(1)').textContent = `Perguntas corretas: ${correctAnswers}`;
    }

    if (incorrectAnswers !== null) {
        document.querySelector('.lista li:nth-child(2)').textContent = `Perguntas erradas: ${incorrectAnswers}`;
    }

    if (scorePercentage !== null) {
        document.querySelector('.lista li:nth-child(3)').textContent = `Pontuação final: ${scorePercentage}%`;
    }
});