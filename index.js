const express = require('express');
const app = express();
const port = 3000;
const rota = require("./rotas/index");
const router = require('./rotas/atedimentorotas');

rota(app);

app.listen(port, (error) => {
    if(error) {
        console.log('Ocorreu um erro');
        return;
    }
    console.log('Sucedido');    
});