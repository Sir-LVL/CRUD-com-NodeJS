const express = require('express');
const app = express();
const port = 3000;

app.listen(3000, (error) => {
    if(error) {
        console.log('Ocorreu um erro');
        return;
    }
    console.log('Sucedido');    
});