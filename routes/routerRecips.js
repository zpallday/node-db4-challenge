const express = require('express')

const modelRecipes = require('../models/recipes-models.js');
const router = express.Router();


router.get('/', async (req,res) => {
    const recipes = await modelRecipes.getRecipes();
    res.status(200).json({recipes});
})
.catch(err => {
    res.status(500).json({ message: "failed"})
})

router.get('/:id/list', async (req,res) => {
 const {id} = req.params




})


