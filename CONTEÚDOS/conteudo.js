function navegarPara(pagina) {
    window.location.href = pagina;
}

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

    const toggleButton = document.querySelector(".entrar2");
    const info = document.getElementById("info");

    toggleButton.addEventListener("click", function() {
        if (info.style.display === "none" || info.style.display === "") {
            info.style.display = "block";
        } else {
            info.style.display = "none";
        }

        
        async function getUser() {
            const token = localStorage.getItem('token'); 
          
            if (!token) {
              alert('Usuário não autenticado');
              return;
            }
          
            try {
              const response = await fetch('/getUser', {
                headers: {
                  'Authorization': `Bearer ${token}`
                }
              });
          
              const data = await response.json();
          
              if (data.loggedIn) {
                const nomeUsuario = document.getElementById('nomeUsuario');
                nomeUsuario.textContent = `Olá, ${data.user.nome}`;
              } else {
                alert('Usuário não autenticado');
              }
            } catch (error) {
              console.error('Erro ao obter o usuário:', error);
            }
          }
          
        getUser();

          document.getElementById('logoutButton').addEventListener('click', async () => {
            try {
              const response = await fetch('/logout', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
              });
      
              const result = await response.json();
              alert(result.message);
              if (response.ok) {
                window.location.href = '/index.html';
              }
            } catch (error) {
              console.error('Erro ao realizar logout:', error);
            }
          });
    });
});
