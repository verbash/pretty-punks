const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const fetch = require('node-fetch');

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/express_backend', (req, res) => {
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT'});
});

app.get('/paras_api', (req, res) => {
    fetch(`https://api-v2-mainnet.paras.id/token-series?collection_id=pretty-punks-by-agatheartsnear&__limit=24&__skip=${req.query.skip}`)
    .then(res => res.json())
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.send(err);
    });
});