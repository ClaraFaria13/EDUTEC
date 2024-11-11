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

function createConfetti() {
    const confettiContainer = document.getElementById("confetti");
    const confettiColors = ["#FF3E96", "#FFD700", "#4B0082", "#00FF7F", "#00BFFF", "#FF6347"];

    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement("div");
        confetti.classList.add("confetti-piece");

        // Cor e tamanho aleatórios
        confetti.style.backgroundColor = confettiColors[Math.floor(Math.random() * confettiColors.length)];
        confetti.style.width = `${Math.random() * 10 + 5}px`;
        confetti.style.height = `${Math.random() * 20 + 10}px`;

        // Posição inicial aleatória
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
        confetti.style.animationDelay = `${Math.random() * 5}s`;

        confettiContainer.appendChild(confetti);
    }
}

createConfetti();