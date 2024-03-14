import { Request, Response } from 'express';
import nodemailer from "nodemailer";
import { validateEmail } from "../schemas/schemaCorreo";
import { Correo } from "../interfaces/correo.interface";

const envioCorreo = async (req: Request, res: Response) => {
    try {
        const body: Correo = req.body;
        const result = validateEmail(body);
        const transporter = nodemailer.createTransport({
            host: 'mail.turismopequena.com.mx',
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD
            }
        });

        if (!result.success) { return res.status(404).json({ error: JSON.parse(result.error.message) }) }

        const opciones = {
            from: process.env.EMAIL_USER,
            subject: result.data.asunto,
            to: result.data.emailService,
            text: "Nombre del Cliente:\n " + [result.data.nombre] + "\nCorreo del cliente: \n" + [result.data.emailUser] + "\nMensaje del cliente: \n" + [result.data.mensaje]
        }
        console.log(opciones);
        await transporter.sendMail(opciones);

    } catch (error) {
        res.status(500).json({ ok: false, msg: 'Error al enviar el mensaje' })
    }
};

export { envioCorreo };
