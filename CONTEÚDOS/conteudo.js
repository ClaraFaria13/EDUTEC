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
    try {
        const response = await fetch('/getUser');
        const data = await response.json();
        const nomeUsuario = document.getElementById("nomeUsuario");

        if (data.loggedIn && nomeUsuario) {
            nomeUsuario.textContent = `Olá, ${nomeUsuario}`;
        }
    } catch (error) {
        console.error('Erro ao obter o usuário:', error);
    }
}

const logoutButton = document.getElementById('logout');
if (logoutButton) {
    logoutButton.addEventListener('click', async () => {
        await fetch('/logout', { method: 'POST' });
        window.location.href = '/index.html'; 
    });
}

getUser();

    });
});
