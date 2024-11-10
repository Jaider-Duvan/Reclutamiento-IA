// src/components/FileUpload.js
import React, { useState } from 'react';

const FileUpload = ({ onFileSelect }) => {
    const [fileName, setFileName] = useState('');

    // Función para manejar el cambio de archivo
    const handleFileChange = (e) => {
        const file = e.target.files[0]; // Obtener el primer archivo
        if (file) {
            setFileName(file.name); // Actualiza el nombre del archivo
            onFileSelect(file); // Llama al callback con el archivo seleccionado
        }
    };

    return (
        <div className="file-upload">
            <input
                type="file"
                accept="application/pdf" // Solo permite archivos PDF
                onChange={handleFileChange}
            />
            {fileName && <p>Archivo seleccionado: {fileName}</p>}
        </div>
    );
};

export default FileUpload; // Exportación correcta del componente
