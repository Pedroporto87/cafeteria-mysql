const mysql = require('mysql2');
require('dotenv').config();

// Criar o pool de conexões
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
});

// Criar banco de dados se não existir
pool.query(`CREATE DATABASE IF NOT EXISTS \`${process.env.DB_DATABASE}\``, (err, result) => {
    if (err) {
        console.error('Erro ao criar banco de dados:', err);
        return;
    }

    console.log('Banco de dados criado ou já existe.');

    // Agora, criar a tabela neste banco de dados
    const createTableQuery = `
        CREATE TABLE IF NOT EXISTS \`${process.env.DB_DATABASE}\`.pedidos (
            id INT AUTO_INCREMENT PRIMARY KEY,
            cliente VARCHAR(255) NOT NULL,
            item ENUM('cappuccino', 'especiais', 'frappé', 'coado', 'expresso', 'latte') NOT NULL,
            quantidade INT NOT NULL,
            observacoes TEXT,
            status ENUM('Em preparo', 'Pronto', 'Entregue', 'Cancelado') DEFAULT 'Em preparo'
        );
    `;

    // Mudar a conexão para o banco de dados específico e criar a tabela
    pool.query(createTableQuery, (err, result) => {
        if (err) {
            console.error('Erro ao criar tabela:', err);
            return;
        }
        console.log('Tabela "pedidos" criada ou já existe.');

        // // Fechar o pool de conexões
        // pool.end();
    });
});

module.exports = pool;