
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

