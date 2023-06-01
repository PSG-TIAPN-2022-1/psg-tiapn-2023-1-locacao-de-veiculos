const express = require('express');
const sql = require('mssql');

const app = express();
app.use(express.json());

// Configurações de conexão com o banco de dados
const config = {
  user: 'seu_usuario',
  password: 'sua_senha',
  server: 'localhost',
  database: 'seu_banco_de_dados',
};

// Função para verificar se o usuário está cadastrado pelo ID
async function verificarUsuarioPorId(userId) {
  try {
    // Conectar ao banco de dados
    await sql.connect(config);

    // Executar consulta para verificar o usuário pelo ID
    const result = await sql.query(`SELECT * FROM usuarios WHERE id = '${userId}'`);

    if (result.recordset.length === 1) {
      // Usuário encontrado
      return true;
    } else {
      // Usuário não encontrado
      return false;
    }
  } catch (error) {
    // Erro na consulta ou na conexão com o banco de dados
    console.error('Erro ao verificar usuário por ID:', error);
    throw new Error('Erro no servidor!');
  } finally {
    // Fechar conexão com o banco de dados
    sql.close();
  }
}

// Evento do botão de login
document.getElementById('login-button').addEventListener('click', async () => {
  const userId = document.getElementById('user-id').value;

  try {
    const usuarioCadastrado = await verificarUsuarioPorId(userId);

    if (usuarioCadastrado) {
      // Usuário cadastrado
      // Faça algo aqui, como redirecionar para a página de login
    } else {
      // Usuário não cadastrado
      // Faça algo aqui, como exibir uma mensagem de erro
    }
  } catch (error) {
    console.error('Erro ao verificar usuário:', error);
    // Faça algo aqui, como exibir uma mensagem de erro genérica
  }
});

