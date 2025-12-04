const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Usuario "de prueba"
const USER_EMAIL = 'brodolfo435@gmail.com';
const USER_PASSWORD = '123456';

app.post('/auth/login', (req, res) => {
  const { email, password } = req.body;

  console.log('Intento de login:', email, password);

  if (email === USER_EMAIL && password === USER_PASSWORD) {
    // Login exitoso
    return res.json({ token: 'token-de-ejemplo-123' });
  }

  // Credenciales incorrectas
  return res.status(401).json({ message: 'Credenciales inválidas' });
});

app.listen(PORT, () => {
  console.log(`Servidor de autenticación escuchando en http://localhost:${PORT}`);
});
