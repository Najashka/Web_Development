import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import db from "./config/db.js";
import studentRoutes from "./routes/studentRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/students", studentRoutes);

// Test Route
app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "API Student Management - Praktikum Pemrograman Dasar",
        developer: "Naja Muhammad Risqi"
    });
});

// Test Health 
app.get('/health', (req, res) => {
    // Mengambil data performa server sederhana
    const healthStatus = {
        status: 'OK',
        service: 'Student Management API',
    };

    try {
        // Kamu bisa menambahkan validasi koneksi database di sini jika perlu
        
        // Jika semuanya aman, kembalikan status 200 (OK)
        res.status(200).json(healthStatus);
    } catch (error) {
        // Jika ada masalah (misal database mati), kembalikan status 503 (Service Unavailable)
        healthStatus.status = 'DOWN';
        healthStatus.error = error.message;
        res.status(503).json(healthStatus);
    }
});

// Test Koneksi Database
app.get("/test-db", async (req, res) => {

    try {

        const connection = await db.getConnection();

        const [rows] = await connection.query("SELECT NOW() AS waktu");

        connection.release();

        res.json({
            success: true,
            database: "Connected",
            server_time: rows[0].waktu
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {

    console.log("==================================");
    console.log(" Student Management System");
    console.log("==================================");
    console.log(`Server Running : http://localhost:${PORT}`);
    console.log("Database : MySQL");
    console.log("==================================");

});
