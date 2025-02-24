import http from "http";

const PORT = 3000;

const rotas = {
    "/": "API com Node e Express.js",
}

const server = http.createServer((req, res) => {
    res.writedHead(200, {"Content-Type": "text/plain" });
});

server.listen(PORT, () => {
    console.log("Servidor na escuta!");
});