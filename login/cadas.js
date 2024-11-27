const cadasBotao = document.querySelector("#bot1");
const loginBotao = document.querySelector("#bot2");
const cadasForm = document.querySelector(".cadasform");
const loginForm = document.querySelector(".loginform");

const enviarCadastro = async (e) => {
  e.preventDefault(); 

  const nome = document.querySelector("#nome input").value;
  const idade = document.querySelector("#idade input").value;
  const email = document.querySelector("#email input").value;
  const senha = document.querySelector("#senha input").value;
  const confSenha = document.querySelector("#confSenha input").value;

  if (senha !== confSenha) {
    alert("As senhas não coincidem.");
    return;
  }

  try {
    const response = await fetch('http://localhost:3000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: nome, password: senha, email }),
    });

    const data = await response.json();
    if (response.status === 201) {
      alert(data.message);
      
      window.location.href = '../CONTEÚDOS/conteudo.html';  
    } else {
      alert(data.error || "Erro ao cadastrar!");
    }
  } catch (error) {
    console.error("Erro ao enviar dados de cadastro:", error);
    alert("Erro ao cadastrar!");
  }
};


const enviarLogin = async (e) => {
  e.preventDefault();

  const emailInput = document.querySelector(".loginform input[type='email']");
  const senhaInput = document.querySelector(".loginform input[type='password']");

  if (!emailInput || !senhaInput) {
    console.error("Elementos de email ou senha não encontrados.");
    alert("Erro no formulário de login.");
    return;
  }

  const email = emailInput.value;
  const senha = senhaInput.value;

  console.log("Enviando dados de login:", { email, senha });

  try {
    const response = await fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email, password: senha }),
    });

    const data = await response.json();
    console.log("Resposta do servidor:", data);

    if (response.status === 200) {
    localStorage.setItem('token', data.token); 
    alert(data.message); 
    window.location.href = '../CONTEÚDOS/conteudo.html'; 
  } else {
    // Caso ocorra algum erro
    alert(data.error || "Erro ao fazer login.");
  }
} catch (error) {
  console.error("Erro ao fazer login:", error);
  alert("Erro ao fazer login.");
}
};

loginBotao.addEventListener('click', () => {
  loginBotao.style.backgroundColor = "rgb(69, 98, 78, 0.6)";
  cadasBotao.style.backgroundColor = "rgb(100, 138, 112, 0.3)";

  loginForm.style.left = "50%";
  cadasForm.style.left = "-50%";

  loginForm.style.opacity = 1;
  cadasForm.style.opacity = 0;
});

cadasBotao.addEventListener('click', () => {
  loginBotao.style.backgroundColor = "rgb(100, 138, 112, 0.3)";
  cadasBotao.style.backgroundColor = "rgb(69, 98, 78, 0.6)";

  loginForm.style.left = "150%";
  cadasForm.style.left = "50%";

  loginForm.style.opacity = 0;
  cadasForm.style.opacity = 1;
});

document.querySelector(".cadasform .cadas").addEventListener("click", enviarCadastro);
document.querySelector(".loginform .log").addEventListener("click", enviarLogin);
