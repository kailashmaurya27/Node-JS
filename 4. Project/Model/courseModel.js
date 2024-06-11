const Joi = require('joi');
const string = require('joi/lib/types/string');
const mongoose = require('mongoose')

const Course = mongoose.model('Course', new mongoose.Schema({
    title : {
        type: String,
        required: true,
        trim: true,
        minLength: 5,
        maxLength: 255
    },
    category: {

    },
    creator : {
        type: string,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    }

}));

function validateCourse(course){
    const schema = {
        title : Joi.string().min(5).max(50).required(),
        categoryId: Joi.string().required(),
        creator: Joi.string().min(5).required(),
        rating: Joi.number().min(0).required()
    };
    return Joi.validate(course, schema);
}

exports.Course = Course;
exports.validate = validateCourse;