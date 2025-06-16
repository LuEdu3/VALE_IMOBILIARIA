const mysql = require('mysql2');

// Altere os dados abaixo conforme sua configuração do MySQL Workbench
const connection = mysql.createConnection({
  host: 'localhost', // ou o IP do seu servidor MySQL
  user: 'root',      // seu usuário do MySQL
  password: '',      // sua senha do MySQL
  database: 'nome_do_banco' // nome do banco de dados
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao MySQL:', err.message);
    return;
  }
  console.log('Conectado ao MySQL com sucesso!');
});

module.exports = connection;
