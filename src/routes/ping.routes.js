import { Router } from "express";
import { allTeacher } from "../controllers/ping.controller.js";

export const pingRoute = Router();
// EndPoint de test de conexion
pingRoute.get('/ping', allTeacher);