import express from "express";
import { envioCorreo } from "../controllers/correoController";

const correoRoutes: express.Application = express();

correoRoutes.get("/envio", envioCorreo);

export { correoRoutes }