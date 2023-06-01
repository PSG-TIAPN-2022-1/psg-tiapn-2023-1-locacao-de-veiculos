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

const fetch = require('fecht');

app.post('/login', async (req, res) => {
  const { email, senha } = req.body;

  try {
    // Executar chamada para verificar o email e senha
    const response = await fetch('http://localhost:3000/usuarios/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, senha })
    });

    if (response.ok) {
      // Usuário autenticado com sucesso
      res.status(200).json({ message: 'Login realizado com sucesso!' });
    } else if (response.status === 401) {
      // Credenciais inválidas
      res.status(401).json({ error: 'Credenciais inválidas!' });
    } else {
      // Erro no servidor
      res.status(500).json({ error: 'Erro no servidor!' });
    }
  } catch (error) {
    // Erro na chamada
    console.error('Erro no login:', error);
    res.status(500).json({ error: 'Erro no servidor!' });
  }
});

// Iniciar o servidor
app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000.');
});
