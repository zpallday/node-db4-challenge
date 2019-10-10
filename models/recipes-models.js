const db = require('../data/db-config.js')

function getRecipes() {
    return db('recipes');
}

function getShoppingList(recipe_id) {
    return db('recipes-ingredients-units as res')
    .join('ingredients as ing', 'res.ingredient_id', '=', 'i.id')
    .where({recipe_id})
    .select('i.name as Ingredient Name', 'res.quantity as Amount')
}




module.exports = {
    getRecipes,
    getShoppingList,

}