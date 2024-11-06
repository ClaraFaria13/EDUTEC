const cadasBotao = document.querySelector("#bot1");
const loginBotao = document.querySelector("#bot2");
const cadasForm = document.querySelector(".cadasform");
const loginForm = document.querySelector(".loginform");

loginBotao.addEventListener('click', () => {
    loginBotao.style.backgroundColor = "rgb(69, 98, 78, 0.6)";
    cadasBotao.style.backgroundColor = "rgb(100, 138, 112, 0.3)";

    loginForm.style.left = "50%";
    cadasForm.style.left = "-50%";

    loginForm.style.opacity = 1;
    cadasForm.style.opacity = 0;
})

cadasBotao.addEventListener('click', () => {
    loginBotao.style.backgroundColor = "rgb(100, 138, 112, 0.3)";
    cadasBotao.style.backgroundColor = "rgb(69, 98, 78, 0.6)";

    loginForm.style.left = "150%";
    cadasForm.style.left = "50%";

    loginForm.style.opacity = 0;
    cadasForm.style.opacity = 1;
})