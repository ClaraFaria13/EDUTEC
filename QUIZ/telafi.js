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

document.addEventListener("DOMContentLoaded", function() {
  const button = document.getElementById("escuro");
  const imagem = document.getElementById("img-clara");
  const imagem2 = document.getElementById("img-clara2");

  if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("escuro");
    imagem.src = '../IMG/fundoes.png'; 
    imagem2.src = '../IMG/fundoes2.png';
}

button.addEventListener("click", function() {
    document.body.classList.toggle("escuro");

    if (document.body.classList.contains("escuro")) {
        localStorage.setItem("darkMode", "enabled");

        imagem.src = '../IMG/fundoes.png'; 
        imagem2.src = '../IMG/fundoes2.png';
    } else {
        localStorage.setItem("darkMode", "disabled");

        imagem.src = '../IMG/fundo.png'; 
        imagem2.src = '../IMG/fundo2.png';
    }
});
})