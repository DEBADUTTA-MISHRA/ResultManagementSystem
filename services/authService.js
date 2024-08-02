const Student = require('../models/studentModel');
const authMiddleware = require('../middlewares/authMiddleware');
const commonHelper = require('../helpers/commonHelper');

const login = async (email, password) => {
    const student = await Student.findOne({ email });
    if (!student) {
        return null;
    }

    const validPassword = await commonHelper.comparePassword(password, student.password);
    if (!validPassword) {
        return null;
    }

    const token = await authMiddleware.generateToken({
        _id: student._id,
        name:student.name,
    });
    return { 
        token,
        userData: {
            _id: student._id,
            name: student.name,
            email: student.email,
          },
     };
};

module.exports = {
    login
};
