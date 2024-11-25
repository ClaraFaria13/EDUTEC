import express from 'express';
import connection from './database.js';
import jwt from 'jsonwebtoken';

const router = express.Router();
const secret = 'ola_mundo';  // Defina um segredo seguro para a geração do JWT
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization && req.headers.authorization.split(' ')[1];  // Obtendo o token no cabeçalho

  if (!token) {
    return res.status(401).json({ error: 'Token não fornecido' });
  }

  // Verificando o token
  jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: 'Token inválido ou expirado' });
    }
    req.userId = decoded.userId;  // Passa o ID do usuário para a próxima etapa
    next();
  });
};


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
  const { email, password } = req.body; 
  

  try {
    const [rows] = await connection.execute(
      'SELECT * FROM users_lg WHERE email = ? AND password = ?',
      [email, password]
    );

    if (rows.length > 0) {
      const user = rows[0]; // Considera que o primeiro usuário retornado é o correto

      // Gerando o token JWT com o ID do usuário
      const token = jwt.sign({ userId: user.id }, secret, { expiresIn: '1h' });

      res.json({ 
  	message: 'Login bem-sucedido!',
  	token: token,  // Envia o token para o frontend 
      });

    } else {
      res.status(401).json({ error: 'Credenciais inválidas' });
    }
  } catch (error) {
    console.error("Erro ao fazer login:", error);
    res.status(500).json({ error: 'Erro ao fazer login' });
  }
});

router.get('/getUser', (req, res) => {
  const token = req.headers.authorization && req.headers.authorization.split(' ')[1];  // Obtendo o token no cabeçalho

  if (!token) {
    return res.status(401).json({ error: 'Token não fornecido' });
  }

  // Verificando o token
  jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: 'Token inválido ou expirado' });
    }

    const userId = decoded.userId;  // ID do usuário decodificado a partir do token

    // Buscar dados do usuário no banco de dados
    connection.execute(
      'SELECT * FROM users_lg WHERE id = ?',
      [userId],
      (err, results) => {
        if (err) {
          return res.status(500).json({ error: 'Erro ao buscar dados do usuário' });
        }

        if (results.length === 0) {
          return res.status(404).json({ error: 'Usuário não encontrado' });
        }

        const user = results[0];
        res.json({
          loggedIn: true,
          user: {
            id: user.id,
            nome: user.nome,
            email: user.email,  // Adicione os campos necessários
            // Outros campos
          },
        });
      }
    );
  });
});

export default router; 