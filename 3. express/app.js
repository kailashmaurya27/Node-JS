const express = require('express');
const morgan = require('morgan')

const middleWare1 = require('./middlewares/middle1');
const middleWare2 = require('./middlewares/middle2');

const app = express();

app.use(express.json());

app.use(middleWare1);
app.use(middleWare2);

app.use(morgan('tiny'));

const courses = [
    {id: 1, name: 'Java'},
    {id: 2, name: 'Pyhton'},
    {id: 3, name: 'JavaScript'},
]

// get, post, put, delete

app.get('/', (req, res) => {
    res.send('Hello from Kailash')
})

app.get('/about', (req, res) => {
    res.send('hey there, I am about')
})


// Route Parameters

app.get('/courses/:id', (req, res) => {
    console.log(req.params.id);
    let course = courses.find(course => course.id === parseInt(req.params.id));
    if(!course) res.status(404).send('Not Found');
    res.send(course);
})

// Get 

app.get('/courses', (req, res) => {
    res.send(courses);
})

// Post Method, for creating a new data

app.post('/courses', (req, res) => {
    const course = {
        id: courses.length + 1,
        name: req.body.name 
    }
    courses.push(course);
    res.send(course);
})

// Put Method, for updating a existing data

app.put('/courses/:coursename', (req, res) => {
    let course = courses.find(course => course.name === req.params.coursename)
    if(!course) res.status(404).send('Not Found');
    course.name = req.body.name
    res.send(course)
})

// Delete Method, for deleting a json data
// 1. using filter method for string values
app.delete('/courses/:coursename', (req, res) => {
    let updatedCourses = courses.filter(course => course.name !== req.params.coursename)
    courses = updatedCourses
    res.send(courses)
})

// 2. Using splice method for integer values
// app.delete('/courses/:id', (req, res) => {
//     let course = courses.find(course => course.id === parseInt(req.params.id))
//     console.log(course);
//     if(!course) res.status(404).send('Not Found');
//     const index = courses.indexOf(course);
//     courses.splice(index, 1);
//     res.send(course);
// })

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Port is running on ${port}`);
})