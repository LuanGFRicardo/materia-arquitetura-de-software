// import http from "http";
import app from "./src/app.js";

const PORT = 3000;

const rotas = {
    "/": "API com Node e Express.js",
    "/posts": "Rota de postagem",
    "/autores": "Rota de autores",
}

//const server = http.createServer((req, res) => {
//    res.writeHead(200, {"Content-Type": "text/plain" });
//});

app.listen(PORT, () => {
    console.log("Servidor na escuta!");
});