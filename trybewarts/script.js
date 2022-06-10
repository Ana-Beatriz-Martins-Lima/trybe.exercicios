const loginButton = document.getElementById('login-btn');
const email = document.getElementById('email');
const senha = document.getElementById('senha');
function fazerLogin() {
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
loginButton.addEventListener('click', fazerLogin);

const agreement = document.getElementById('agreement');
const botao = document.getElementById('submit-btn');

function habilitaEnvio() {
  if (agreement.checked === true) {
    botao.disabled = false;
  } else {
    botao.disabled = true;
  }
}

agreement.addEventListener('click', habilitaEnvio);
