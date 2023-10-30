const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.get('/restaurantes', async (req, res) => {
  try {
    // Realiza una solicitud GET a la API de INEGI
    const response = await axios.get(
      'https://www.inegi.org.mx/app/api/denue/v1/consulta/BuscarEntidad/restaurantes/04/011/40/fe705a90-9025-4f12-9720-098a542c0f8a'
    );

    // Extrae los datos de la respuesta
    const data = response.data;

    // Envía la respuesta al cliente
    res.json(data);
  } catch (error) {
    console.error('Error al obtener datos de la API de INEGI:', error);
    res.status(500).json({ error: 'Error al obtener datos' });
  }
});

app.listen(port, () => {
  console.log(`Microservicio en ejecución en http://localhost:${port}`);
});
