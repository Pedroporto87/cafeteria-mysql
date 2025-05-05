const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const cafeteriaRoutes = require('./src/routes/cafeteriaRoutes');


const app = express();

// Middleware para parsing de JSON
app.use(bodyParser.json());

// Roteamento 
app.use('/api', cafeteriaRoutes);



// Middleware para tratamento de erros
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send('Algo deu errado!');
// });

// Definindo porta e iniciando servidor
const PORT = process.env.DB_PORT;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});