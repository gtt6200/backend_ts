export interface Correo {
    asunto: Zod.ZodString,
    nombre: Zod.ZodString,
    emailUser: Zod.ZodString,
    mensaje: Zod.ZodString,
    emailService: Zod.ZodString
}