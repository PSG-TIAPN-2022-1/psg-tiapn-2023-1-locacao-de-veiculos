/*API para pegar Nacionalidades*/ 
const selectNacionalidade = document.getElementById("nacionalidade");

fetch("https://restcountries.com/v3.1/all")
  .then(response => response.json())
  .then(data => {
    data.forEach(pais => {
      const option = document.createElement("option");
      option.value = pais.name.common;
      option.text = pais.name.common;
      selectNacionalidade.appendChild(option);
    });
  });

  /*Local Storage e Validação de senha*/ 
  const buttonCadastro = document.querySelector('#buttonCadastro');

  buttonCadastro.addEventListener('click', (event) => {
    event.preventDefault();
    
    const nomeCompleto = document.querySelector('#nomeCompleto').value;
    const nacionalidade = document.querySelector('#nacionalidade').value;
    const cpf = document.querySelector('#cpf').value;
    const genero = document.querySelector('input[name="genero"]:checked').value;
    const celular = document.querySelector('#celular').value;
    const email = document.querySelector('#email').value;
    const confirmarEmail = document.querySelector('#confirmarEmail').value;
    const senha = document.querySelector('#senha').value;
    const confirmarSenha = document.querySelector('#confirmarSenha').value;
    const aceitarTermos = document.querySelector('#termos input[type="checkbox"]').checked;
    
    if (senha !== confirmarSenha || email !== confirmarEmail) {
      alert('As senhas e emails devem ser iguais.');
      return;
    }
    
    if (!aceitarTermos) {
      alert('Você deve aceitar os termos de privacidade.');
      return;
    }
    
    localStorage.setItem('nomeCompleto', nomeCompleto);
    localStorage.setItem('nacionalidade', nacionalidade);
    localStorage.setItem('cpf', cpf);
    localStorage.setItem('genero', genero);
    localStorage.setItem('celular', celular);
    localStorage.setItem('email', email);
    localStorage.setItem('senha', senha);
    
    alert('Cadastro realizado com sucesso!');
  });
  