import express from 'express';
import routes from './routes.js';
import dotenv from 'dotenv';
import cors from 'cors';
import session from 'express-session';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
  secret: process.env.SESSION_SECRET || 'ola_mundo',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true } 
}));


app.get('/', (req, res) => {
  res.send('Bem-vindo à API EDUTEC!');
});

app.use('/', routes);

app.get('/isLoggedIn', (req, res) => {
  if (req.session.user) {
    res.send('Usuário está logado');
  } else {
    res.send('Nenhum usuário logado');
  }
});

app.post('/logout', (req, res) => {
  if (req.session) {
    req.session.destroy((err) => {
      if (err) {
        console.error('Erro ao encerrar a sessão:', err);
        return res.status(500).json({ message: 'Erro ao fazer logout' });
      }
      res.clearCookie('session_cookie_name');
      return res.status(200).json({ message: 'Logout realizado com sucesso!' });
    });
  } else {
    return res.status(200).json({ message: 'Usuário já está deslogado' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});