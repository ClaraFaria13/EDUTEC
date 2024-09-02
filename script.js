function navegarPara(pagina) {
    window.location.href = pagina;
}

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

document.addEventListener("DOMContentLoaded", function() {
  var hamburger = document.getElementById("hamburger");
  var menuItems = document.getElementById("menu-items");
  var configButton = document.getElementById("Ver-botoes");
  var darkModeButton = document.getElementById("escuro");

  hamburger.addEventListener("click", function() {
      if (menuItems.style.display === "block") {
          menuItems.style.display = "none";
      } else {
          menuItems.style.display = "block";
      }
  });

  configButton.addEventListener("click", function() {
      if (darkModeButton.style.display === "block") {
          darkModeButton.style.display = "none";
      } else {
          darkModeButton.style.display = "block";
      }
  });
});


