const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear el cuerpo de las peticiones en formato JSON
app.use(express.json());

// Servir archivos estáticos desde el directorio actual (donde está index.html e imágenes)
app.use(express.static(__dirname));

// Ruta raíz que sirve index.html por comodidad
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Ruta para acceder al panel de control administrativo de los empleados
app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, 'admin.html'));
});

// Función para obtener la ruta del archivo de datos. 
// En Vercel (servidor de solo lectura), usamos la carpeta temporal /tmp.
const getFilePath = () => {
  const isVercel = process.env.VERCEL === '1' || !!process.env.VERCEL;
  const filePath = isVercel
    ? path.join('/tmp', 'macarons.json')
    : path.join(__dirname, 'macarons.json');

  if (isVercel && !fs.existsSync(filePath)) {
    try {
      const defaultPath = path.join(__dirname, 'macarons.json');
      fs.copyFileSync(defaultPath, filePath);
      console.log('Copiado macarons.json de plantilla a /tmp para Vercel.');
    } catch (err) {
      console.error('Error al copiar macarons.json a /tmp:', err);
    }
  }
  return filePath;
};

// Endpoint GET para obtener los macarons del archivo JSON
app.get('/api/macarons', (req, res) => {
  const filePath = getFilePath();
  
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error al leer el archivo macarons.json:', err);
      return res.status(500).json({ 
        success: false, 
        message: 'Error al leer los datos de macarons en el servidor.' 
      });
    }
    try {
      const macarons = JSON.parse(data);
      res.json(macarons);
    } catch (parseErr) {
      console.error('Error al parsear el archivo JSON:', parseErr);
      res.status(500).json({ 
        success: false, 
        message: 'El archivo JSON del servidor tiene un formato inválido.' 
      });
    }
  });
});

// Endpoint POST para guardar los datos modificados en el archivo macarons.json
app.post('/api/macarons', (req, res) => {
  const macaronsNuevos = req.body;
  const filePath = getFilePath();

  // Validaciones básicas de seguridad y formato
  if (!Array.isArray(macaronsNuevos)) {
    return res.status(400).json({ 
      success: false, 
      message: 'Los datos enviados deben ser un array de macarons.' 
    });
  }

  // Escribir el nuevo JSON formateado con 4 espacios
  fs.writeFile(filePath, JSON.stringify(macaronsNuevos, null, 4), 'utf8', (err) => {
    if (err) {
      console.error('Error al escribir el archivo macarons.json:', err);
      return res.status(500).json({ 
        success: false, 
        message: 'Error interno del servidor al guardar el archivo.' 
      });
    }
    
    console.log('Archivo macarons.json guardado con éxito por una petición cliente.');
    res.json({ 
      success: true, 
      message: 'El archivo macarons.json ha sido modificado y guardado con éxito en el servidor.' 
    });
  });
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`==================================================`);
  console.log(` Servidor de Mi Pastelería iniciado correctamente.`);
  console.log(` Accede a la aplicación en: http://localhost:${PORT}`);
  console.log(`==================================================`);
});
