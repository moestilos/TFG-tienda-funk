const express = require('express');
const router = express.Router();
const userStorage = require('../services/userStorage');
const jwt = require('jsonwebtoken');

router.post('/register', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Guardar en la base de datos
    // ... código existente de guardado en DB ...

    // Guardar en archivo
    await userStorage.saveUser({ email, password });

    res.status(201).json({ message: 'Usuario registrado exitosamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error en el registro' });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Verificar en la base de datos
    // ... código existente de verificación en DB ...

    // Verificar en archivo
    const userFromFile = await userStorage.validateCredentials(email, password);

    if (userFromFile) {
      const token = jwt.sign(
        { email: userFromFile.email },
        process.env.JWT_SECRET || 'your-secret-key',
        { expiresIn: '1h' }
      );
      res.json({ token });
    } else {
      res.status(401).json({ error: 'Credenciales inválidas' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error en el login' });
  }
});

module.exports = router;
