function fazerLogout() {
    localStorage.removeItem('authToken'); // Remove o token do LocalStorage
    localStorage.removeItem('userID');
    redirecionarParaLogin(); // Redireciona para a página de login (opcional)
}

// Manipulador de evento de clique no botão "Sair"
document.getElementById("sair-button").addEventListener("click", function (event) {
    event.preventDefault(); // Impede o comportamento padrão do clique no link

    // Executa a função de logout
    fazerLogout();
});

function redirecionarParaLogin() {
    window.location.href = "../homePage/index.html";
}

function saudacao(){
    const id = localStorage.getItem('userID');
    fetch(`http://localhost:3000/api/usuarios/${id}`)
    .then(function(response){
        return response.json();
    })
    .then(function(usuario){
        const nome = usuario.NOME_COMPLETO
        document.getElementById("tituloID").innerHTML = "Reservas de "+ `<b>${nome}</b>` + " :";
    })
}

function exibirReservas(){
    const id = localStorage.getItem('userID');
    fetch(`http://localhost:3000/api/reservas/${id}`)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        for (let i = 0; i < data.length; i++) {
            const card = document.createElement('div');
            card.className = 'card';
            card.style.width = '18rem';
      
            const cardImgDiv = document.createElement('div');
            const img = document.createElement('img')
            img.src = `${data[i].imagem}`;
            cardImgDiv.appendChild(img)
            cardImgDiv.className = 'card-img';
      
            const cardBody = document.createElement('div');
            cardBody.className = 'card-body';

            const cardBody2 = document.createElement('div');
            cardBody2.className = 'card-body';
      
            const titulo1 = document.createElement('h2');
            titulo1.className = 'card-title';
            titulo1.textContent = data[i].modelo;
      
            const p = document.createElement('p');
            p.className = 'card-text';
            
            const marcaLabel = document.createElement('strong');
            marcaLabel.textContent = 'Marca:';
            p.appendChild(marcaLabel);
            p.innerHTML += ` ${data[i].marca}<br>`;
            
            const combustivelLabel = document.createElement('strong');
            combustivelLabel.textContent = 'Combustível:';
            p.appendChild(combustivelLabel);
            p.innerHTML += ` ${data[i].combustivel}<br>`;
            
            const transmissaoLabel = document.createElement('strong');
            transmissaoLabel.textContent = 'Transmissão:';
            p.appendChild(transmissaoLabel);
            p.innerHTML += ` ${data[i].transmissao}<br>`;
            
            const corLabel = document.createElement('strong');
            corLabel.textContent = 'Cor:';
            p.appendChild(corLabel);
            p.innerHTML += ` ${data[i].cor}<br>`;
    
            const kmLabel = document.createElement('strong');
            kmLabel.textContent = 'Quilometragem: ';
            p.appendChild(kmLabel);
            p.innerHTML += `${data[i].quilometragem}`

            const titulo2 = document.createElement('h2');
            titulo2.className = 'card-title';
            titulo2.textContent = "Retirada: ";

            const p2 = document.createElement('p');
            p2.className = 'card-text';

           const dataParaWeb = data[i].dataDeReserva.split('T')[0];
            const [ano, mes, dia] = dataParaWeb.split('-');
            const dataFormatada = `${dia}/${mes}/${ano}`;

            const dataRetirada = document.createElement('strong');
            dataRetirada.textContent = 'Data: ';
            p2.appendChild(dataRetirada);
            p2.innerHTML += `${dataFormatada}<br><br>`;

            const horaRetirada = document.createElement('strong');
            horaRetirada.textContent = 'Hora: ';
            p2.appendChild(horaRetirada);
            p2.innerHTML += `${data[i].horaDeReserva}<br><br>`

            const localRetirada = document.createElement('strong');
            localRetirada.textContent = 'Local: ';
            p2.appendChild(localRetirada);
            p2.innerHTML += `${data[i].cidade},${data[i].rua},${data[i].numero}`
      
            const listGroup = document.createElement('ul');
            listGroup.className = 'list-group list-group-flush';
      
            const li = document.createElement('li');
            li.className = 'list-group-item value';
            li.textContent = `R$ ${data[i].valorsemanal}`;
      
            const cardBodyBottom = document.createElement('div');
            cardBodyBottom.className = 'card-body';
      
            const link1 = document.createElement('button');
            link1.id = 'reservarExibeCarros'
            link1.className = 'card-link custom-btn btn-7 reservar';
            const span = document.createElement('span')
            span.textContent = 'Cancelar reserva'
            link1.appendChild(span)
            link1.href = '#';

            cardBody.appendChild(titulo1);
            cardBody.appendChild(p);
            cardBody2.appendChild(titulo2);
            cardBody2.appendChild(p2);
            card.appendChild(cardImgDiv);
            card.appendChild(cardBody);
            card.appendChild(cardBody2);
            
           
            listGroup.appendChild(li);
            card.appendChild(listGroup);
            cardBodyBottom.appendChild(link1);

            
            card.appendChild(cardBodyBottom);

            document.getElementById('reservasFeitas').appendChild(card);
        }
    })
}


window.addEventListener("load", ()=> {
        saudacao();
        exibirReservas();
});

    
