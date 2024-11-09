import express from 'express';
import connection from './database.js';

const router = express.Router();

// Rota de cadastro
router.post('/register', async (req, res) => {
  const { username, password, email } = req.body;

  try {
    const [result] = await connection.execute(
      'INSERT INTO users_lg (username, password, email) VALUES (?, ?, ?)',
      [username, password, email]
    );
    res.status(201).json({ message: 'Usuário registrado com sucesso!' });
  } catch (error) {
    console.error('Erro ao registrar usuário:', error);
    res.status(500).json({ error: 'Erro ao registrar o usuário' });
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body; // Altere 'username' para 'email'
  

  try {
    const [rows] = await connection.execute(
      'SELECT * FROM users_lg WHERE email = ? AND password = ?',
      [email, password]
    );

    if (rows.length > 0) {
      res.json({ message: 'Login bem-sucedido!' });
    } else {
      res.status(401).json({ error: 'Credenciais inválidas' });
    }
  } catch (error) {
    console.error("Erro ao fazer login:", error);
    res.status(500).json({ error: 'Erro ao fazer login' });
  }
});


export default router;


