# MIGS - Site Web Entreprise d'Informatique

Site web moderne pour une entreprise d'informatique avec un frontend React et un backend Node.js.

## 🚀 Fonctionnalités

- **Page d'accueil moderne** avec design responsive
- **Logo intégré** de l'entreprise
- **Bouton de connexion** en bas à droite (visuel uniquement)
- **Design professionnel** avec des couleurs harmonieuses
- **Backend API** simple avec Express.js

## 📁 Structure du projet

```
MIGS/
├── frontend/          # Application React
│   ├── src/
│   │   ├── assets/    # Images et ressources
│   │   ├── App.js     # Composant principal
│   │   └── index.js   # Point d'entrée
│   └── public/        # Fichiers publics
├── backend/           # Serveur Node.js
│   ├── server.js      # Serveur Express
│   └── package.json   # Dépendances backend
├── logo.png          # Logo de l'entreprise
└── package.json      # Scripts principaux
```

## 🛠️ Installation

1. **Installer les dépendances principales :**
   ```bash
   npm install
   ```

2. **Installer les dépendances du backend :**
   ```bash
   cd backend
   npm install
   ```

3. **Installer les dépendances du frontend :**
   ```bash
   cd frontend
   npm install
   ```

4. **Copier le logo dans le dossier assets :**
   ```bash
   copy logo.png frontend\src\assets\logo.png
   ```

## 🚀 Démarrage

### Option 1 : Démarrer tout en même temps
```bash
npm run dev
```

### Option 2 : Démarrer séparément

**Backend (port 5000) :**
```bash
npm run server
```

**Frontend (port 3000) :**
```bash
npm run client
```

## 🌐 Accès

- **Frontend :** http://localhost:3000
- **Backend API :** http://localhost:5000

## 🎨 Design

Le site utilise une palette de couleurs moderne avec :
- **Arrière-plan :** Dégradé bleu foncé (#1a1a2e → #16213e → #0f3460)
- **Accents :** Bleu clair (#4facfe → #00f2fe)
- **Texte :** Blanc et gris clair pour la lisibilité
- **Effets :** Transparences et flou pour un effet moderne

## 📱 Responsive

Le site est entièrement responsive et s'adapte aux :
- Ordinateurs de bureau
- Tablettes
- Smartphones

## 🔧 Technologies utilisées

- **Frontend :** React, Styled Components
- **Backend :** Node.js, Express.js
- **Police :** Inter (Google Fonts)
- **Icônes :** Emojis pour la simplicité

## 📝 Notes

- Le bouton "Se connecter" est actuellement un visuel uniquement
- Les fonctionnalités de contact sont simulées avec des alertes
- Le backend fournit une API simple pour la santé du serveur 