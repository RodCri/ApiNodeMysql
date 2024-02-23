import { Router } from "express";

import {upload,uploadFile,uploadMilti,uploadFiles} from "../controllers/avatar.controller.js";

export const routerAvatar = Router();

routerAvatar.post('/avatars', upload, uploadFile);
routerAvatar.post('/avatars/multi', uploadMilti, uploadFiles);