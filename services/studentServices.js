const Student = require('../models/studentModel');
const commonHelper = require('../helpers/commonHelper');


const createStudent = async (data) => {
    const emailExists = await Student.findOne({ email: data.email });
    if (emailExists) {
        return { isDuplicateEmail: true };
    }

    const hashedPassword = await commonHelper.hashPassword(data.password);
    const newStudent = new Student({ ...data, password: hashedPassword });
    const result = await newStudent.save();
    return result;
};

module.exports = {
    createStudent
};