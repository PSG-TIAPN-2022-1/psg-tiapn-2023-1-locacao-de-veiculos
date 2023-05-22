<?php
// informações de conexão com o banco de dados
$host = "seu_host";
$username = "seu_usuario";
$password = "sua_senha";
$database = "seu_banco_de_dados";

// criando a conexão com o banco de dados
$conn = mysqli_connect($host, $username, $password, $database);

// verificando se houve um erro na conexão
if (mysqli_connect_errno()) {
  die("Falha na conexão com o banco de dados: " . mysqli_connect_error());
}

// recebendo os dados do formulário
$nomeCompleto = $_POST['nomeCompleto'];
$nacionalidade = $_POST['nacionalidade'];
$cpf = $_POST['cpf'];
$genero = $_POST['genero'];
$celular = $_POST['celular'];
$email = $_POST['email'];
$senha = $_POST['senha'];

// inserindo os dados na tabela
$sql = "INSERT INTO usuarios (nomeCompleto, nacionalidade, cpf, genero, celular, email, senha) VALUES ('$nomeCompleto', '$nacionalidade', '$cpf', '$genero', '$celular', '$email', '$senha')";
if (mysqli_query($conn, $sql)) {
  echo "Cadastro realizado com sucesso!";
} else {
  echo "Erro ao realizar o cadastro: " . mysqli_error($conn);
}

// fechando a conexão com o banco de dados
mysqli_close($conn);
?>
