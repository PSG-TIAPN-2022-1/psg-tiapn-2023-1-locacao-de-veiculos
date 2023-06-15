document.getElementById("logar").addEventListener("click", autenticarUsuario);


function autenticarUsuario(event) {
  event.preventDefault(); // Impede o envio do formulário e a atualização da página
  
  // Obtém os valores digitados pelo usuário
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  
  // Cria o objeto de dados a ser enviado para a autenticação
  var data = {
    username: username,
    password: password
  };

  //console.log(data);

  
  
  // Envia uma requisição GET para a rota /usuarios para obter todos os usuários
  fetch('http://localhost:3000/api/usuarios')
    .then(function(response) {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Falha ao obter usuários');
      }
    })
    .then(function(usuarios) {
      //console.log(usuarios)
      // Verifica se o usuário e a senha correspondem a algum usuário retornado pela rota /usuarios
      var usuarioAutenticado = usuarios.find(function(usuario) {
        if (usuario.EMAIL === username && usuario.SENHA === password){
          const userID = usuario.ID;
          return userID;
        }
      });
      
      if (usuarioAutenticado != undefined) {
        // Usuário autenticado com sucesso
        alert('Usuário autenticado!');
        const userID = usuarioAutenticado.ID;
        console.log(userID)
        localStorage.setItem('userID', userID);
        const authToken = gerarAuthToken(); // Gera um token de autenticação
        localStorage.setItem('authToken', authToken); // Armazena o token no LocalStorage
        window.location.href = "../homePage/index.html";
        // Realize as ações desejadas, como redirecionar para outra página
      } else {
        // Erro na autenticação
        alert('Falha na autenticação!');
      }
    })
    .catch(function(error) {
      console.log(error);
      alert('Ocorreu um erro na autenticação!');
    });
}

function gerarAuthToken() {
  const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const comprimentoToken = 32;
  let token = '';

  for (let i = 0; i < comprimentoToken; i++) {
    const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
    token += caracteres.charAt(indiceAleatorio);
  }

  return token;
}



