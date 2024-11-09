import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

let connection;

async function connectDB() {
  try {
    connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
    });
    console.log('Conectado ao banco de dados com sucesso!');
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
    process.exit(1);
  }
}

await connectDB();
export default connection;


