//import { sendEmail } from "../../src/email";



window.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const codigo = urlParams.get('codigo');
  const dataDeReserva = urlParams.get('data')
  const horaDeReserva = urlParams.get('hora')
  const numero = urlParams.get('numero')
  const rua = urlParams.get('rua')
  const cidade = urlParams.get('cidade')
  const modelo = urlParams.get('modelo')
  const marca = urlParams.get('marca')
  const combustivel = urlParams.get('combustivel')
  const transmissao = urlParams.get('transmissao')
  const cor = urlParams.get('cor')
  const quilometragem = urlParams.get('quilometragem')
  const valorsemanal = urlParams.get('valorsemanal')
  const imagem = urlParams.get('imagem')
  const idVeiculo = urlParams.get('idVeiculo')
  const PLACA = urlParams.get('PLACA')

  const userID = localStorage.getItem('userID');

  // Criar elementos HTML e exibir os dados
  const container = document.getElementById('container');

  // Criar elemento para exibir a imagem do carro
  const imagemCarro = document.createElement('img');
  imagemCarro.className = 'img-carro'
  imagemCarro.src = imagem;
  container.appendChild(imagemCarro);

  // Criar elementos para exibir os detalhes da reserva
  const reservaDiv = document.createElement('div');
  reservaDiv.className = 'reservaDiv'
  reservaDiv.innerHTML = `
    <h2>Detalhes da Reserva</h2>
    <p><b>Data de Reserva:</b> ${dataDeReserva}</p>
    <p><b>Hora de Reserva:</b> ${horaDeReserva}</p>
    <p><b>Local de Retirada:</b> ${cidade}, ${rua}, ${numero}</p>
    <button class="reservabtn">
        <span>Confirmar reserva</span>
    </button >
    </br>
    </br>
    <div class="checkbox-wrapper-4">
        <input type="checkbox" id="morning" class="inp-cbx">
        <label for="morning" class="cbx"><span>
        <svg height="10px" width="12px">
            
        </svg></span><span><b>Aceitar termos e condições específicas de reserva.</b></span></label>
        <svg class="inline-svg">
            <symbol viewBox="0 0 12 10" id="check-4">
            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
            </symbol>
        </svg>
    </div>
    <div id="aviso" style="display: none;"></div>
  `;
  container.appendChild(reservaDiv);

  // Criar elementos para exibir os detalhes do carro
  const carroDiv = document.createElement('div');
  carroDiv.className = 'carroDiv'
  carroDiv.innerHTML = `
    <h2>Detalhes do Carro</h2>
    <p><b>Modelo:</b></b> ${modelo}</p>
    <p><b>Marca:</b> ${marca}</p>
    <p><b>Combustível:</b> ${combustivel}</p>
    <p><b>Transmissão:</b> ${transmissao}</p>
    <p><b>Cor:</b> ${cor}</p>
    <p><b>Quilometragem:</b> ${quilometragem}</p>
    <p><b>Valor Semanal:</b> ${valorsemanal}</p>
  `;
  container.appendChild(carroDiv);


  var botao = document.querySelector(".reservabtn");
  botao.addEventListener("click", (event) => {
    event.preventDefault();


    // Obter o userID do localStorage
    const userID = localStorage.getItem('userID');

    const dados = {
      userID,
      idVeiculo,
      dataDeReserva,
      horaDeReserva,
      numero,
      rua,
      cidade,
      modelo,
      marca,
      combustivel,
      transmissao,
      cor,
      quilometragem,
      valorsemanal,
      imagem,
      PLACA
    };

    var termosCheckbox = document.getElementById("morning");
    var aviso = document.getElementById("aviso");
    if (termosCheckbox.checked == true) {
      // código para confirmar a reserva
      aviso.style.display = "none";
      aviso.classList.remove("shake");

      // Enviar requisição POST para o servidor
      fetch('http://localhost:3000/api/reservar', {

        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
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

      fetch(`http://localhost:3000/api/veiculos/${idVeiculo}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
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

      window.alert('Reserva concluida')

      // fetch(`http://localhost:3000/api/usuarios/${userID}`)
      // .then(response => response.json())
      // .then(data => {
      //   console.log("data: "+ data)
        
        
      // });

      //sendEmail()

      window.location.href = '../Nova Pasta/locação.html'


    } else {
      aviso.innerHTML = "Por favor, aceite os termos antes de confirmar a reserva.";
      aviso.style.display = "block";
      aviso.classList.add("shake");

    }



    console.log(dados)


  });



});





