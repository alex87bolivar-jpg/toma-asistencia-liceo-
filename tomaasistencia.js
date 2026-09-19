
const http = require("http");
 
const servidor = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Inicio</h1><p>Bienvenido a mi proyecto</p>");
  } else if (req.url === "/nosotros") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Nosotros</h1><p>Aquí va la historia del proyecto</p>");
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>404 - Página no encontrada</h1>");
  }
});
 
servidor.listen(3000, () => console.log("Servidor en http://localhost:3000"));
