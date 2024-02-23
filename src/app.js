// modulos de common js para traer express -> const express = require('express');

// Ecmascript Modules NodeJs superior a la 16
import express from 'express';
import { routerTeacher } from './routes/teacher.routes.js';
import { pingRoute } from './routes/ping.routes.js';
import { routerAvatar } from './routes/avatar.routes.js';

export const app = express();

app.use(express.json())

app.use('/api',routerTeacher);
app.use('/api',pingRoute);
app.use('/api',routerAvatar);

app.use((req,res,next) =>{
  res.status(404).json({
    message: 'EndPoint not found'
  })
})