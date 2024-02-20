import { Router } from "express";
import { getTeachers, addTeacher, deleteTeacher, updateTeacher } from "../controllers/teacher.controller.js";
export const routerTeacher = Router();

// Creando los endPoints
routerTeacher.get('/teacher', getTeachers );
routerTeacher.post('/teacher', addTeacher);
routerTeacher.put('/teacher', updateTeacher);
routerTeacher.delete('/teacher', deleteTeacher);
