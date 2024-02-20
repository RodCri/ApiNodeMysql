import { Router } from "express";
import { getTeachers, addTeacher, deleteTeacher, updateTeacher,getTeacher } from "../controllers/teacher.controller.js";
export const routerTeacher = Router();

// Creando los endPoints
routerTeacher.get('/teacher', getTeachers );
routerTeacher.get('/teacher/:id', getTeacher);
routerTeacher.post('/teacher', addTeacher);
// Actualiza todo
routerTeacher.put('/teacher/:id', updateTeacher);
// Actualiza lo que necesita
routerTeacher.patch('/teacher/:id', updateTeacher);
routerTeacher.delete('/teacher/:id', deleteTeacher);
