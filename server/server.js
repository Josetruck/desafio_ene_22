const express = require("express");
const router = require("./routes/routes");
const port = 5000;
const app = express();
const cookieParser = require('cookie-parser');
const multer = require("multer")
const fs = require('fs');

// Configuración del destino de las imagenes. Ordenado en carpetas por id del usuario.
const storage = multer.diskStorage({
    destination: async (req, file, cb) => {
      fs.mkdir(`./Images/${req.headers.id_user}`, (err) => {
        if (err) { console.error(err);
        } else { console.log('Carpeta creada con éxito'); }
      });
      const destination = `./Images/${req.headers.id_user}`
      cb(null, destination);
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}--${file.originalname}`);
    }
  });
  
  const upload = multer({ storage: storage });
  app.post("/upload", upload.single("file"), (req, res) => {
    // usa req.file.filename para obtener el nombre del archivo subido y devolverlo para insertar la url en la bd de imagenes.
    res.json({
      status: true,
      path: req.file.filename
    });
  });

  // Middlewares: 
  app.use(cookieParser());
  app.use(express.json());