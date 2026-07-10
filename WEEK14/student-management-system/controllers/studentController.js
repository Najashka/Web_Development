import StudentModel from "../models/studentModel.js";

const StudentController = {

    async getAll(req, res) {

        try {

            const students = await StudentModel.getAll();

            res.status(200).json({

                success: true,

                total: students.length,

                data: students

            });

        } catch (error) {

            res.status(500).json({

                success: false,

                message: error.message

            });

        }

    }

};

export default StudentController;
