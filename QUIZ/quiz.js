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
