const express = require('express');
const {Student, validate} = require('../Model/studentsModel')
const router = express.Router();


router.get('/', async (req, res)=>{
    let students = await Student.find()
    res.send(students);
})

router.post('/', async (req, res) => {

    const {error} = validate(req.body)
    if(error) res.status(400).send(error.details[0].message)

    const student = new Student({
        name: req.body.name,
        Phone : req.body.Phone, 
        isEnrolled : req.body.isEnrolled
    });
    await student.save()
    res.send(student);
});

router.put('/:id', async (req, res) => {

    const {error} = validate(req.body)
    if(error) res.status(400).send(error.details[0].message)

    const student = Student.findByIdAndUpdate(req.params.id, {name : req.body.name, Phone : req.body.Phone, isEnrolled : req.body.isEnrolled}, {new : true});
    if(!student) return res.status(404).send('the student with the given ID was not found!');

    res.send(student);
});

router.delete('/:id', async (req, res) => {
    const student = await Student.findByIdAndRemove(req.params.id)
    if(!student) return res.status(404).send('The student with the given ID was not found');

    res.send(student);
});

router.get('/:id', async (req, res) => {
    const student = await Student.findById(req.params.id)
    if(!student) return res.status(404).send('The student with the given ID was not found');
    res.send(student);
})



module.exports = router