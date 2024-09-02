
document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("escuro");
    const imagem = document.getElementById("img-clara");
    const imagem2 = document.getElementById("img-clara2");
    const imagem3 = document.getElementById("img-ani");
    const imagem4 = document.getElementById("img-ani2");

    button.addEventListener("click", function() {
      document.body.classList.toggle("escuro");

      if (document.body.classList.contains("escuro")) {
        imagem.src = '../IMG/fundoes.png'; 
        imagem2.src = '../IMG/fundoes2.png';
        imagem3.src = '../IMG/animaises.png'; 
        imagem4.src = '../IMG/animaises2.png';
      } else {
        imagem.src = '../IMG/fundo.png'; 
        imagem2.src = '../IMG/fundo2.png';
        imagem3.src = '../IMG/animais.png'; 
        imagem4.src = '../IMG/animais2.png';
      }
    });
  });