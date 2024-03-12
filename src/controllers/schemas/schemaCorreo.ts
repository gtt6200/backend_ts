import zod from "zod";
import { Correo } from "../../interfaces/correo.interface";


const z = zod;
const correoSchema = z.object({
    asunto: z.string({ invalid_type_error: 'Subject must be a string.', required_error: 'Subject email is required.' }),
    nombre: z.string({ invalid_type_error: 'Nombre must be a string.', required_error: 'Nombre email is required.' }),
    emailUser: z.string({ invalid_type_error: 'Email must be a type email.', required_error: 'Email is required.' }).email(),
    mensaje: z.string({ invalid_type_error: 'Message is required.', required_error: 'Message is required.' }),
    emailService: z.string({ invalid_type_error: 'Email must be a type email.', required_error: 'Email is required.' }).email()
});

function validateEmail(object: Correo) {
    return correoSchema.required().safeParse(object);
}

export { validateEmail };