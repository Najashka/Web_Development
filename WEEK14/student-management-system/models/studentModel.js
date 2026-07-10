import db from "../config/db.js";

const StudentModel = {

    async getAll() {

        const [rows] = await db.query(`
            SELECT
                id,
                npm,
                nama,
                jurusan,
                semester,
                email
            FROM students
            ORDER BY id DESC
        `);

        return rows;

    }

};

export default StudentModel;
