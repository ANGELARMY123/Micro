const express = require('express');
const axios = require('axios');
const app = express();

// Modifica la URL de la API para buscar restaurantes en Candelaria (clave 011)
const INEGI_API_URL = 'https://www.inegi.org.mx/app/api/denue/v1/consulta/BuscarMunicipio/restaurantes/04/011/10/fe705a90-9025-4f12-9720-098a542c0f8a';

// Importa la configuración de la base de datos
const db = require('./db');

app.get('/restaurantes-candelaria', async (req, res) => {
  try {
    // Realiza una solicitud a la API de INEGI para obtener restaurantes en Candelaria
    const response = await axios.get(INEGI_API_URL);
    const restaurantes = response.data;

    // Aquí puedes manejar la respuesta como desees
    res.json(restaurantes);
  } catch (error) {
    console.error('Error al obtener datos de restaurantes en Candelaria:', error);
    res.status(500).json({ error: 'Error al obtener datos de restaurantes en Candelaria' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Microservicio de restaurantes en ejecución en el puerto ${PORT}`);
});
