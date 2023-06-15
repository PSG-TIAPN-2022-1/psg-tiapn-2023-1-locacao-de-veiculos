window.addEventListener("load", ()=> {
    consultarVeiculos();
});

function consultarVeiculos() {
    const urlParams = new URLSearchParams(window.location.search);
    const codigo = urlParams.get('codigo');
  
    fetch(`http://localhost:3000/api/veiculos/${codigo}`)
  .then(response => response.json())
  .then(data => {
    // A resposta do servidor pode ser tratada aqui
    for (let i = 0; i < data[0].length; i++) {
      const card = document.createElement('div');
      card.className = 'card';
      card.style.width = '18rem';

      const img = document.createElement('img');
      img.className = 'card-img-top';
      img.src = '../Nova pasta/IMG/onix.jpg'; // Defina a URL da imagem aqui
      img.alt = '...'; // Defina o texto alternativo da imagem aqui

      const cardBody = document.createElement('div');
      cardBody.className = 'card-body';

      const h5 = document.createElement('h5');
      h5.className = 'card-title';
      h5.textContent = data[0][i].MODELO;

      const p = document.createElement('p');
      p.className = 'card-text';
      p.textContent = `${data[0][i].MARCA}, ${data[0][i].COMBUSTIVEL}, ${data[0][i].TRANSMISSAO}, ${data[0][i].COR}`;

      const listGroup = document.createElement('ul');
      listGroup.className = 'list-group list-group-flush';

      const li = document.createElement('li');
      li.className = 'list-group-item';
      li.textContent = `Quilometragem: ${data[0][i].QUILOMETRAGEM}`;

      const cardBodyBottom = document.createElement('div');
      cardBodyBottom.className = 'card-body';

      const link1 = document.createElement('a');
      link1.href = '#';
      link1.className = 'card-link';
      link1.textContent = 'Ver mais';

      cardBody.appendChild(h5);
      cardBody.appendChild(p);
      card.appendChild(img);
      card.appendChild(cardBody);
      listGroup.appendChild(li);
      card.appendChild(listGroup);
      cardBodyBottom.appendChild(link1);
      
      card.appendChild(cardBodyBottom);

      document.getElementById('teste').appendChild(card);
    }
  });

  }
  
  