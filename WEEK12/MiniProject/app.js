const http = require("http");

const server = http.createServer((req, res) => {

    res.setHeader("Content-Type", "text/html");

    if (req.url === "/") {

        res.writeHead(200);

        res.end(`
            <h1>Selamat Datang</h1>
            <p>Website Sistem Informasi Kampus</p>
        `);

    }

    else if (req.url === "/profil") {

        res.writeHead(200);

        res.end(`
            <h1>Profil Kampus</h1>
            <p>Kampus terbaik untuk belajar teknologi.</p>
        `);

    }

    else if (req.url === "/mata-kuliah") {

        res.writeHead(200);

        res.end(`
            <h1>Mata Kuliah</h1>

            <ul>
                <li>Pemrograman Dasar</li>
                <li>Basis Data</li>
                <li>Web Development</li>
            </ul>
        `);

    }

    else if (req.url === "/dosen") {

        res.writeHead(200);

        res.end(`
            <h1>Data Dosen</h1>

            <ul>
                <li>Bapak Andi</li>
                <li>Ibu Rina</li>
                <li>Bapak Dedi</li>
            </ul>
        `);

    }

    else if (req.url === "/kontak") {

        res.writeHead(200);

        res.end(`
            <h1>Kontak</h1>

            <p>Email : kampus@email.com</p>

            <p>Telepon : 021-12345678</p>
        `);

    }

    else {

        res.writeHead(404);

        res.end(`
            <h1>404</h1>

            <p>Halaman Tidak Ditemukan</p>
        `);

    }

});

server.listen(3000, () => {

    console.log("Server berjalan di http://localhost:3000");

});