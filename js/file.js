

// Отримуємо доступ до списку категорій (ul#categories)
const categoriesList = document.querySelector('#categories');

// Отримуємо всі елементи li.item в списку
const categoryItems = categoriesList.querySelectorAll('li.item');

// Виводимо кількість категорій в консоль
console.log(`Number of categories: ${categoryItems.length}`);

// Для кожного елемента li.item виконуємо наступні дії
categoryItems.forEach((categoryItem) => {
  // Отримуємо текст заголовку (тегу <h2>) для поточного елемента
  const categoryTitle = categoryItem.querySelector('h2').textContent;

  // Отримуємо всі елементи <li> в поточній категорії
  const categoryElements = categoryItem.querySelectorAll('li');

  // Виводимо текст заголовку та кількість елементів у поточній категорії в консоль
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryElements.length}`);
});






