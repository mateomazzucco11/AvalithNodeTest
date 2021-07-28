const express = require('express');
const app = express();
const { readFile } = require('fs');
const port = 5000;

app.get('/date', (req, res) => {
    res.send(new Date().toLocaleDateString());
})

app.get('/text', (req, res) => {
    readFile('./text.txt', 'utf-8', (err, txt) => {
        if (err) {
            return null;
        }
        res.send(txt);
    })
})

app.get('/goodmorning', (req, res) => {
    const nombre = req.body.nombre;
    res.send(`Buenos dias ${nombre}`);
})

app.listen(port, () => {
    console.log(`Abrir en http://localhost:${port}`);
})