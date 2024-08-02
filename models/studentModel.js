const mongoose = require('mongoose');
const validator = require('validator');

const studentSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
            index:true
        },
        email: {
            type: String,
            validate: {
                validator: validator.isEmail,
                message: "{VALUE} is not a valid email",
            },
            required: true,
            index: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        role:{
            type: String,
             enum: ['admin', 'student'],
              required: true
        },
    },
    {
        timestamps:true
    }
);

const Student = mongoose.model('Student',studentSchema);

module.exports = Student;