const http = require("http");

const server = http.createServer((req, res) => {

    res.writeHead(200, {
        "Content-Type": "text/html"
    });

    res.end("<h1>Selamat Datang di Praktikum Pemrograman Dasar</h1>");

});

server.listen(3000);

console.log("Server berjalan di http://localhost:3000");