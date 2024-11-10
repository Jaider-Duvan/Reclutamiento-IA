// backend/server.js
const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const PORT = 5000;

// Configuración de Multer para almacenar los archivos cargados
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Carpeta donde se guardarán los archivos
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Nombre único para cada archivo
    },
});

const upload = multer({ storage });

// Ruta para manejar la carga de un archivo PDF
app.post('/upload', upload.single('file'), (req, res) => {
    if (!req.file) {
        return res.status(400).send({ message: 'No se ha subido ningún archivo.' });
    }
    console.log('Archivo recibido:', req.file);
    res.json({ message: 'Archivo cargado exitosamente', filename: req.file.filename });
});

// Servir archivos estáticos (para desarrollo)
app.use(express.static('public'));

// Ruta raíz para verificar que el servidor está funcionando
app.get('/', (req, res) => {
    res.send('¡Servidor Backend Corriendo!');
});

// Escuchar el puerto
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
