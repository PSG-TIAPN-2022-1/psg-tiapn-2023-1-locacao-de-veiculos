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
        document.getElementById("tituloID").innerHTML = "Bem vindo, "+ `<b>${nome}</b>!`;
    })
}


window.addEventListener("load", ()=> {
        saudacao();
});

    
