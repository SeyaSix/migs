const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/api/health', (req, res) => {
  res.json({ message: 'Serveur MIGS opérationnel', status: 'OK' });
});

// Route pour servir le logo
app.get('/api/logo', (req, res) => {
  res.sendFile(path.join(__dirname, '../logo.png'));
});

// Route par défaut
app.get('/', (req, res) => {
  res.json({ message: 'API MIGS - Entreprise d\'informatique' });
});

app.listen(PORT, () => {
  console.log(`🚀 Serveur MIGS démarré sur le port ${PORT}`);
  console.log(`📡 API disponible sur http://localhost:${PORT}`);
}); 