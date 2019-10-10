const express = require('express')

const modelRecipes = require('../models/recipes-models.js');
const router = express.Router();


router.get('/', async (req,res) => {
    const recipes = await modelRecipes.getRecipes();
})