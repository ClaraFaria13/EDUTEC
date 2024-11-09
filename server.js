import express from 'express';
import routes from './routes.js';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rota para o caminho raiz, prevenindo o erro "Cannot GET /"
app.get('/', (req, res) => {
  res.send('Bem-vindo à API EDUTEC!');
});

// Suas rotas de registro e login
app.use('/', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});


