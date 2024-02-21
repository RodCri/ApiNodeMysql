// modulos de common js para traer express -> const express = require('express');

// Ecmascript Modules NodeJs superior a la 16
import express from 'express';
import { routerTeacher } from './routes/teacher.routes.js';
import { pingRoute } from './routes/ping.routes.js';

const app = express();

app.use(express.json())

app.use('/api',routerTeacher);
app.use(pingRoute);

app.use((req,res,next) =>{
  res.status(404).json({
    message: 'EndPoint not found'
  })
})

app.listen(5000)
console.log("server listening port 5000");