window.addEventListener("load", ()=> {
    consultarVeiculos();
});

function consultarVeiculos() {
    const urlParams = new URLSearchParams(window.location.search);
    const codigo = urlParams.get('codigo');
    const dataDeReserva = urlParams.get('data')
    const horaDeReserva = urlParams.get('hora')
    const numero = urlParams.get('numero')
    const rua = urlParams.get('rua')
    const cidade = urlParams.get('cidade')
    
    fetch(`http://localhost:3000/api/veiculos/${codigo}`)
  .then(response => response.json())
  .then(data => {
    console.log("data: "+ data)
    //A resposta do servidor pode ser tratada aqui
    criarDiv(data, dataDeReserva,horaDeReserva,numero,rua,cidade)
  });

}

function criarDiv(data, dataDeReserva,horaDeReserva,numero,rua,cidade){
    for (let i = 0; i < data[0].length; i++) {
      const card = document.createElement('div');
      card.className = 'card';
      card.style.width = '18rem';

      const cardImgDiv = document.createElement('div');
      const img = document.createElement('img')
      img.src = `${data[0][i].IMAGEM_LINK}`;
      cardImgDiv.appendChild(img)
      cardImgDiv.className = 'card-img';

      const cardBody = document.createElement('div');
      cardBody.className = 'card-body';

      const h5 = document.createElement('h2');
      h5.className = 'card-title';
      h5.textContent = data[0][i].MODELO;

      const p = document.createElement('p');
      p.className = 'card-text';
      
      const marcaLabel = document.createElement('strong');
      marcaLabel.textContent = 'Marca:';
      p.appendChild(marcaLabel);
      p.innerHTML += ` ${data[0][i].MARCA}<br>`;
      
      const combustivelLabel = document.createElement('strong');
      combustivelLabel.textContent = 'Combustível:';
      p.appendChild(combustivelLabel);
      p.innerHTML += ` ${data[0][i].COMBUSTIVEL}<br>`;
      
      const transmissaoLabel = document.createElement('strong');
      transmissaoLabel.textContent = 'Transmissão:';
      p.appendChild(transmissaoLabel);
      p.innerHTML += ` ${data[0][i].TRANSMISSAO}<br>`;
      
      const corLabel = document.createElement('strong');
      corLabel.textContent = 'Cor:';
      p.appendChild(corLabel);
      p.innerHTML += ` ${data[0][i].COR}<br>`;

      const kmLabel = document.createElement('strong');
      kmLabel.textContent = 'Quilometragem: ';
      p.appendChild(kmLabel);
      p.innerHTML += `${data[0][i].QUILOMETRAGEM}`

      const listGroup = document.createElement('ul');
      listGroup.className = 'list-group list-group-flush';

      const li = document.createElement('li');
      li.className = 'list-group-item value';
      li.textContent = `R$ ${data[0][i].ValorSemanal}`;

      const cardBodyBottom = document.createElement('div');
      cardBodyBottom.className = 'card-body';

      const link1 = document.createElement('button');
      link1.id = 'reservarExibeCarros'
      link1.className = 'card-link custom-btn btn-7 reservar';
      const span = document.createElement('span')
      span.textContent = 'Reservar'
      link1.appendChild(span)
      link1.href = '#';
      
      

      link1.addEventListener('click', (event) => {
        if (!estaLogado()) {
          event.preventDefault(); // Impede o comportamento padrão do clique no link
            // Redireciona para a página de login
          redirecionarParaLogin();
        }else{
          const urlParams = new URLSearchParams(window.location.search);
        //const codigo = urlParams.get('codigo');
        const dataDeReserva = urlParams.get('data');
        const horaDeReserva = urlParams.get('hora');
        
    
        // const detalhesReserva = `Detalhes da reserva:\nLocal: ${cidade}, ${rua}, ${numero}\nData: ${dataDeReserva}\nHora: ${horaDeReserva}`;
    
        // const detalhesCarro = `Detalhes do carro:\nModelo: ${data[0][i].MODELO}\nMarca: ${data[0][i].MARCA}\nCombustível: ${data[0][i].COMBUSTIVEL}\nTransmissão: ${data[0][i].TRANSMISSAO}\nCor: ${data[0][i].COR}\nQuilometragem: ${data[0][i].QUILOMETRAGEM}\nValor Semanal: R$ ${data[0][i].ValorSemanal}`;
    
        const novaURL = `./reservar.html?data=${dataDeReserva}&hora=${horaDeReserva}&cidade=${cidade}&rua=${rua}&numero=${numero}&modelo=${data[0][i].MODELO}&marca=${data[0][i].MARCA}&combustivel=${data[0][i].COMBUSTIVEL}&transmissao=${data[0][i].TRANSMISSAO}&cor=${data[0][i].COR}&quilometragem=${data[0][i].QUILOMETRAGEM}&valorsemanal=${data[0][i].ValorSemanal}&imagem=${data[0][i].IMAGEM_LINK}&idVeiculo=${data[0][i].ID}&PLACA=${data[0][i].PLACA}`; 
        

      // Redirecionar para a nova página exibindo os detalhes completos
      window.location.href = novaURL;
        }
        
        
        
        
      });

      cardBody.appendChild(h5);
      cardBody.appendChild(p);
      card.appendChild(cardImgDiv);
      card.appendChild(cardBody);
      listGroup.appendChild(li);
      card.appendChild(listGroup);
      cardBodyBottom.appendChild(link1);
      
      card.appendChild(cardBodyBottom);

      document.getElementById('teste').appendChild(card);
    }
}
  
  