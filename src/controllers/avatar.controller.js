import { pool } from "../db.js";
import multer from 'multer';
import path  from 'path';
import fs from 'node:fs';

const storage = multer.diskStorage({
  destination: '../../images',
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const ext = path.extname(file.originalname);
    cb(null, file.fieldname + '-' + uniqueSuffix + ext);
  }
});

export const upload = multer({ dest: './images' }).single('image');

export const uploadMilti = multer({dest: './images'}).array('images');

function saveImage (file){
  const newPath = `./images/${file.originalname}`;
  fs.renameSync(file.path, newPath);
  console.log(newPath)
  return newPath;
}

export const uploadFile = async(req,res) =>{
  saveImage(req.file)
  const tipo = req.file.mimetype;
  const nombre = req.file.originalname;
  try {
    console.log(tipo,nombre)
    const [rows] = await pool.query('INSERT INTO avatars (tipo,nombre) VALUES (?,?)' ,[tipo,nombre]);
    res.send({
      id: rows.insertId,
      tipo,
      nombre,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Someting goes wrong'
    });
  }
};

export const uploadFiles = (req,res) =>{
  req.files.map(saveImage);
  res.send('termina');
}