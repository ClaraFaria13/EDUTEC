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

app.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.send('Erro ao fazer logout');
    }
    res.send('Logout realizado com sucesso');
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});


