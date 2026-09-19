const http = require("http");
const fs = require("fs");
const path = require("path");

// Función helper para leer y servir archivos HTML sin repetir código
function servirHtml(rutaArchivo, res) {
    fs.readFile(rutaArchivo, (err, data) => {
        if (err) {
            res.writeHead(500, { "Content-Type": "text/html; charset=utf-8" });
            res.end("<h1>Error 500: No se pudo cargar la página</h1>");
        } else {
            res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
            res.end(data);
        }
    });
}

// Creación ÚNICA del servidor HTTP
const servidor = http.createServer((req, res) => {

    // 1. MANEJO DE ARCHIVOS CSS (Estilos)
    if (req.url.endsWith(".css")) {
        // Construye la ruta real del archivo CSS en tu proyecto
        const rutaCss = path.join(__dirname, req.url);

        fs.readFile(rutaCss, (err, cssData) => {
            if (err) {
                res.writeHead(404, { "Content-Type": "text/plain" });
                res.end("CSS no encontrado");
            } else {
                res.writeHead(200, { "Content-Type": "text/css" });
                res.end(cssData);
            }
        });
        return; // Salimos de la función para que no intente buscar un HTML
    }

    // 2. ENRUTAMIENTO DE PÁGINAS HTML
    if (req.url === "/" || req.url === "/tomaasistencia" || req.url === "/tomaasistencia.html") {
        servirHtml(path.join(__dirname, "tomaasistencia.html"), res);
    } 
    else if (req.url === "/home" || req.url === "/home.html") {
        servirHtml(path.join(__dirname, "views", "home.html"), res);
    } 
    else if (req.url === "/calendario" || req.url === "/calendario.html") {
        servirHtml(path.join(__dirname, "views", "calendario.html"), res);
    } 
    else if (req.url === "/clases" || req.url === "/clases.html") {
        servirHtml(path.join(__dirname, "views", "clases.html"), res);
    } 
    else if (req.url === "/login" || req.url === "/login.html") {
        servirHtml(path.join(__dirname, "views", "login.html"), res);
    } 
    else if (req.url === "/observaciones" || req.url === "/observaciones.html") {
        servirHtml(path.join(__dirname, "views", "observaciones.html"), res);
    } 
    else if (req.url === "/registroano" || req.url === "/registroaño" || req.url === "/registroaño.html") {
        servirHtml(path.join(__dirname, "views", "registroaño.html"), res);
    } 
    else if (req.url === "/vistaprofesor" || req.url === "/vistaprofesor.html") {
        servirHtml(path.join(__dirname, "views", "vistaprofesor.html"), res);
    } 
    else {
        res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
        res.end("<h1>404 - Página no encontrada</h1>");
    }
});

// Inicio del Servidor en el puerto 3000
servidor.listen(3000, () => {
    console.log("Servidor iniciado en http://localhost:3000");
});