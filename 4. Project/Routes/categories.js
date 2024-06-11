const express = require('express');
const {Category, validate} = require('../Model/categoriesModel')
const router = express.Router();


// Static Data, we have removed this data to have real time data

// const categories = [
//     {id: 1, name: 'Web'},
//     {id: 2, name: 'Mobile'},
//     {id: 3, name: 'Photography'},
//     {id: 4, name: 'C++'},
// ]

router.get('/api/categories', async (req, res)=>{
    let categories = await Category.find()
    res.send(categories);
})

router.post('/api/categories', async (req, res) => {

    const {error} = validate(req.body)
    if(error) res.status(400).send(error.details[0].message)

    const category = new Category({
        name: req.body.name
    });
    await category.save()
    res.send(category);
});

router.put('/api/categories/:id', async (req, res) => {

    const {error} = validate(req.body)
    if(error) res.status(400).send(error.details[0].message)

    const category = Category.findByIdAndUpdate(req.params.id, {name : req.body.name}, {new : true});
    if(!category) return res.status(404).send('the category with the given ID was not found!');

    res.send(category);
});

router.delete('/api/categories/:id', async (req, res) => {
    const category = await Category.findByIdAndRemove(req.params.id)
    if(!category) return res.status(404).send('The category with the given ID was not found');

    res.send(category);
});

router.get('/api/categories/:id', async (req, res) => {
    const category = await Category.findById(req.params.id)
    if(!category) return res.status(404).send('The genre with the given ID was not found');
    res.send(category);
})

module.exports = router