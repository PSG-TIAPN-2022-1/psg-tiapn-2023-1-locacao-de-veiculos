// Verifica se o usuário está logado
  function estaLogado() {
    const token = localStorage.getItem('authToken');
    return token !== null;
  }
  
  // Função de redirecionamento para a página de login
  function redirecionarParaLogin() {
    window.location.href = "../pagLogin/index.html";
  }
  
  // Função de redirecionamento para a página de reservas
  function redirecionarParaReservas() {
    window.location.href = "../Nova pasta/locação.html";
  }
  
  // Manipulador de evento de clique no botão "Minhas Reservas"
  document.getElementById("reservas-button").addEventListener("click", function(event) {
    if (!estaLogado()) {
      event.preventDefault(); // Impede o comportamento padrão do clique no link
        // Redireciona para a página de login
      redirecionarParaLogin();
    } else {
      // O usuário está logado, pode ir para a página de reservas
      redirecionarParaReservas();
    }
  });

  

  // Verifica se o usuário está logado e oculta o botão de login, se necessário
function verificarLogado() {
  const authToken = localStorage.getItem('authToken');
  const loginButton = document.getElementById('login-button');

  if (authToken) {
    loginButton.style.display = 'none'; // Oculta o botão de login
  } else {
    loginButton.style.display = 'block'; // Exibe o botão de login
  }
}

// Chama a função de verificação ao carregar a página
window.addEventListener('load', verificarLogado);
  