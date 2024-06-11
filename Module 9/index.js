const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/testDatabase')
.then(()=> console.log('Connection is Scuccessful'))
.catch(err=> console.error('Couldnt connect to mongoDB', err))

// Schema

const courseSchema = new mongoose.Schema({
    name : {type: String, required: true, minlength : 5, maxlength : 200}, 
    tags : {type : Array, validate : {
        validator : function(tags){
            return tags.length > 1
        }
    }},
    category: {
        type : String,
        required : true,
        enum : ['DSA', 'Web', 'Mobile', 'Data Science']
    },
    creator : {type: String, required: true},
    publishedDate : {type:Date, default:Date.now},
    isPublished : {type: String, required: true},
    rating : {type : Number, required : function(){return this.isPublished}}
})

const Course = mongoose.model('Course', courseSchema)


// Create A Course


// async function createCourse(){
//     const course = new Course({
//         name : 'JavScript',
//         creator : 'Kailash',
//         isPublished : true,
//         rating : 4
//     })
    
//     const result = await course.save()
//     console.log(result);
// }


// Data Validation in create Course 

async function createCourse(){
    const course = new Course({
        name : 'express',
        tags : ['express'],
        category : 'Web',
        creator : 'Aryan',
        isPublished: true,
        rating : 4.7
    })
    try {
        // await course.validate()
        const result = await course.save();
        console.log(result);
    } catch (err) {
        for(field in err.errors){
            console.log(err.errors[field])
        } 
    }
}

createCourse()

// HOW TO QUERY FOR DOCUMENTS(DATASETS) ?
async function getCourses(){
    const courses = await Course.find({creator : 'Kailash'}).select({name : 1})
    .or([{creator: 'Kailash'}, {rating:4.5}], ) // Logical Query Operator (or / and)
    console.log(courses);
}

// getCourses()


// UPDATE YOUR DOCUMENT

async function updateCourse(id){
    let course = await Course.findById(id);
    if(!course) return;

    course.name = 'Pyhton'
    course.creator = 'Raj'
    const updatedCourse = await course.save();
    console.log(updatedCourse);

}

// updateCourse('6639d2bdd489d7cf800f0736')

// Deleting

async function deleteCourse(id){
    let course = await Course.findByIdAndDelete(id);
    console.log(course);
}

// deleteCourse('6639d2bdd489d7cf800f0736')

