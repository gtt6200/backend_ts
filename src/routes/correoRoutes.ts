import express from "express";
import { envioCorreo } from "../controllers/correoController";

const app: express.Application = express();

app.get("/envio", envioCorreo);

export { app }