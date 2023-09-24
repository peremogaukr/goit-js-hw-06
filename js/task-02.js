const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.getElementById('ingredients');


const ingredientsListItems = ingredients.map(ingredient => {
  const ingredientItemRef = document.createElement('li');
  ingredientItemRef.classList.add('item');
  ingredientItemRef.textContent = ingredient;
  return ingredientItemRef;
});



ingredientsList.append(...ingredientsListItems);