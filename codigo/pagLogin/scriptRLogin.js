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
      console.log(usuarios)
      // Verifica se o usuário e a senha correspondem a algum usuário retornado pela rota /usuarios
      var usuarioAutenticado = usuarios.find(function(usuario) {
        return usuario.EMAIL === username && usuario.SENHA === password;
      });
      
      if (usuarioAutenticado) {
        // Usuário autenticado com sucesso
        alert('Usuário autenticado!');
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



