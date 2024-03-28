export class ApplicationException extends Error {
    constructor(message: string = 'Ha ocurrido un error inesperado') {
        super(message);
    }
}