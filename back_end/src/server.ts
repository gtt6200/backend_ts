import { app } from "./app";
//importo el archivo inicial y habilito un puerto para que corra en el puerto 3000
app.listen(3000, () => {
    console.log('Is run on port 3000');
});