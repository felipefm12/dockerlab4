const express = require('express');
const app = express();

// Configurar las rutas aquí

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});

app.get('/', (req, res) => {
    res.send('Bienvenido a mi aplicación');
  });
  
  app.get('/clientes', (req, res) => {
    res.send('Estos son mis tres clientes: Cliente 1, Cliente 2, Cliente 3');
  });
  
  app.get('/productos', (req, res) => {
    res.send('Estos son mis tres productos: Producto 1, Producto 2, Producto 3');
  });
  