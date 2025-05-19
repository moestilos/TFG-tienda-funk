const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userStorage = require('./services/userStorage');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Inicializar almacenamiento de usuarios
userStorage.initStorage().then(() => {
  console.log('User storage initialized');
});

// Rutas
app.post('/api/login', async (req, res) => {
  // Lógica de inicio de sesión
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});