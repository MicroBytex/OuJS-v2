const express = require('express');
const cors = require('cors');
const app = express();

const images = [
  { id: '1', url: "https://i.redd.it/b45dxk0xvq8d1.png" },
  { id: '2', url: "https://statics.memondo.com/p/99/ccs/2025/05/CC_2818345_b3c7daa776a443eda8d67aa8f0354763_meme_otros_soy_un_incomprendido_1.jpg" },
  // ... (resto de las imágenes)
  { id: '100', url: "https://static.bitrue.com/bitrue-cms/upload/d3eb9_17450664416698_100ca0d35c.jpg" }
];

app.use(cors());

// Endpoint para obtener una imagen aleatoria
app.get('/api/random', (req, res) => {
  const randomIndex = Math.floor(Math.random() * images.length);
  const randomImage = images[randomIndex];
  res.json(randomImage);
});

// Endpoint para obtener todas las imágenes
app.get('/api/images', (req, res) => {
  res.json(images);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
