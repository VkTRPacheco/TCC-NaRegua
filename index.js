//const { request, response } = require('express');
const express = require('express');
const cors = require('cors');

//const router = require('./routes/routes');
const router = require('./routes/route_victor');

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);

//const porta = process.env.PORT || 3333;

const porta = 3333;

//define a porta - ver qual está disponível no servidor
app.listen(porta, () => {
    //console.log('Env: ' + process.env.PORT); // outro jeito de gerar log de funcionamento do servidor
    console.log('Servidor iniciado na prota: ' + porta);
});

app.get('/', (request, response) => {
    response.send('Hello World!!!');
});