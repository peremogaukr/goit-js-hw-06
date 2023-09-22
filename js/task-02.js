const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.getElementById('ingredients');
// console.log(ingredientsList);

const ingredientsListItems = ingredients.map(ingredient => {
  const ingredientItemRef = document.createElement('li');
  ingredientItemRef.classList.add('item');
  ingredientItemRef.textContent = ingredient;
  return ingredientItemRef;
});

// console.log(ingredientsListItems);

ingredientsList.append(...ingredientsListItems);