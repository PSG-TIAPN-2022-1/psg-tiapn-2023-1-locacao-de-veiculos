/*API para pegar Nacionalidades*/ 
//const selectNacionalidade = document.getElementById("nacionalidade");

/*fetch("https://restcountries.com/v3.1/all")
  .then(response => response.json())
  .then(data => {
    data.forEach(pais => {
      const option = document.createElement("option");
      option.value = pais.name.common;
      option.text = pais.name.common;
      selectNacionalidade.appendChild(option);
    });
 }); */

  /*Local Storage e Validação de senha*/ 
  const buttonCadastro = document.querySelector('#buttonCadastro');

  buttonCadastro.addEventListener('click', (event) => {
    event.preventDefault();
    
    const NOME_COMPLETO = document.querySelector('#nomeCompleto').value;
    const NACIONALIDADE = document.querySelector('#nacionalidade').value;
    const CPF = document.querySelector('#cpf').value;
    const GENERO = document.querySelector('input[name="GENERO"]:checked').value;
    const CELULAR = document.querySelector('#celular').value;
    const EMAIL = document.querySelector('#email').value;
    const confirmarEmail = document.querySelector('#confirmarEmail').value;
    const SENHA = document.querySelector('#senha').value;
    const confirmarSenha = document.querySelector('#confirmarSenha').value;
    const aceitarTermos = document.querySelector('#termos input[type="checkbox"]').checked;
    
    if (SENHA !== confirmarSenha || EMAIL !== confirmarEmail) {
      alert('As senhas e emails devem ser iguais.');
      return;
    }
    
    if (!aceitarTermos) {
      alert('Você deve aceitar os termos de privacidade.');
      return;
    }

    const formData = {
      NOME_COMPLETO,
      NACIONALIDADE,
      CPF,
      GENERO,
      CELULAR,
      EMAIL,
      SENHA,
      
    };

    // Enviar os dados para o servidor usando fetch()
  fetch('http://localhost:8080/usuarios', {
    
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
    .then(response => response.json())
    .then(data => {
      // A resposta do servidor pode ser tratada aqui
      console.log('Resposta do servidor:', data);
    })
    .catch(error => {
      // Tratar erros aqui
      console.error('Erro:', error);
    });
    
        
    alert('Cadastro realizado com sucesso!');
  });
  