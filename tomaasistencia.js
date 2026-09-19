const express = require('express');
const path = require('path');
const app = express();

const PORT = 3000;

// Servir archivos estáticos globales (CSS, JS)
app.use(express.static(__dirname));
app.use('/styles', express.static(path.join(__dirname, 'styles')));

// Ruta principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'tomaasistencia.html'));
});

// Rutas de la carpeta views
app.get('/calendario', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'calendario.html'));
});

app.get('/clases', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'clases.html'));
});

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'home.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'login.html'));
});

app.get('/observaciones', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'observaciones.html'));
});

app.get('/registro-ano', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'registroaño.html'));
});

app.get('/vista-profesor', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'vistaprofesor.html'));
});

app.listen(PORT, () => {
    console.log(`Servidor iniciado en http://localhost:${PORT}`);
});