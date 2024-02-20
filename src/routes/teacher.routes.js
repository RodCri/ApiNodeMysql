import { Router } from "express";
import { getTeachers, addTeacher, deleteTeacher, updateTeacher,getTeacher } from "../controllers/teacher.controller.js";
export const routerTeacher = Router();

// Creando los endPoints
routerTeacher.get('/teacher', getTeachers );
routerTeacher.get('/teacher/:id', getTeacher);
routerTeacher.post('/teacher', addTeacher);
routerTeacher.put('/teacher', updateTeacher);
routerTeacher.delete('/teacher/:id', deleteTeacher);
