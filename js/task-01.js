const allCategoriesList = document.querySelectorAll(".item");

console.log(`Number of categories: ${allCategoriesList.length}`);

allCategoriesList.forEach((category) => {
  const categoriListName = category.querySelector("h2").textContent;
  const categoryListItem = category.querySelectorAll("ul > li");

  console.log(`Category: ${categoriListName}`);
  console.log(`Elements: ${categoryListItem.length}`);
});