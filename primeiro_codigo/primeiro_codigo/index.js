const express = require('express');
const app = express();

let data = new Date();

let mensagemDoDia = require('./mensagemDoDia');

app.get('/', (req, res) => {
    let dia = data.getDate();
    let mensagemSelecionada = mensagemDoDia.retornarMensagemDoDia(dia);

    res.json({mensagem: mensagemSelecionada});
});

app.listen(8080, () => {
    console.log('Servidor node iniciado em: ' + data);
})
//localhost: http://localhost:8080/ 

//função listen n deixa por mais comandos no terminal, ela sempre ficara aguardando requisiçoes do back
