
document.getElementById("local-input").addEventListener("click", mostrarLocais);

 var dropdown = null;

 function mostrarLocais() {
   if (dropdown === null) {
     fetch("http://localhost:3000/api/locais", {
       method: "GET"
     })
     .then(response => response.json())
     .then(data => {
       dropdown = criarListaSuspensa(data);
       dropdown.addEventListener('change', selecionarLocal);
       var container = document.getElementById("local-input").parentNode;
       container.appendChild(dropdown);
     })
     .catch(error => {
      
     });
   }
 }

 function criarListaSuspensa(locais) {
   var select = document.createElement("select");

   for (var i = 0; i < locais.length; i++) {
     var option = document.createElement("option");
     option.text = locais[i].Cidade +" , " +locais[i].Rua+" , " + locais[i].Numero;
     select.appendChild(option);
   }

   return select;
 }

 function selecionarLocal() {
   var selectedOption = dropdown.options[dropdown.selectedIndex];
   var localInput = document.getElementById("local-input");
   localInput.value = selectedOption.value;
 }

 function consultarVeiculos(codigo){
  fetch(`http://localhost:3000/api/veiculos/${codigo}`)
  .then(response => response.json())
  .then(data => {
    // A resposta do servidor pode ser tratada aqui
    for(let i = 0; i < data[0].length; i++){
      const li = document.createElement('li');
      li.textContent = data[0][i].MODELO;
      document.getElementById('teste').getElementsByTagName('ul')[0].appendChild(li);
    }
    
 })
}
// AÇÃO DO BOTÃO
 const btnConsultar = document.getElementById('consultar');

 btnConsultar.addEventListener('click', (event) => {
    event.preventDefault();
    const dadosInput = document.getElementById('local-input').value;
    const dadosSeparados = dadosInput.split(',');
    const cidade = dadosSeparados[0].trim();
    const rua = dadosSeparados[1].trim();
    const numero = parseInt(dadosSeparados[2].trim());

    fetch(`http://localhost:3000/api/locais/${numero}`)
    .then(response => response.json())
    .then(data => {
      // A resposta do servidor pode ser tratada aqui
      console.log('Resposta do servidor:', data.Cod_empresa);
      const codigo = data.Cod_empresa;
      const novaURL = `../pagExibeCarros/index.html?codigo=${codigo}`;
      window.location.href = novaURL;
    })
 })

