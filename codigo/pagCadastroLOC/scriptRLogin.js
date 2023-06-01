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

// Rota de login
app.post('/login', async (req, res) => {
  const { email, senha } = req.body;

  try {
    // Conectar ao banco de dados
    await sql.connect(config);

    // Executar consulta para verificar o email e senha
    const result = await sql.query(`SELECT * FROM usuarios WHERE email = '${email}' AND senha = '${senha}'`);

    if (result.recordset.length === 1) {
      // Usuário autenticado com sucesso
      res.status(200).json({ message: 'Login realizado com sucesso!' });
    } else {
      // Credenciais inválidas
      res.status(401).json({ error: 'Credenciais inválidas!' });
    }
  } catch (error) {
    // Erro na consulta ou na conexão com o banco de dados
    console.error('Erro no login:', error);
    res.status(500).json({ error: 'Erro no servidor!' });
  } finally {
    // Fechar conexão com o banco de dados
    sql.close();
  }
});

// Iniciar o servidor
app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000.');
});
