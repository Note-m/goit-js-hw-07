const totalCat = document.querySelectorAll('#categories li.item');

console.log('Number of categoriaes: ' + totalCat.length);

totalCat.forEach(category => {
  const CategoryName = category.querySelector('h2').textContent;
  const Cats = category.querySelectorAll('.categories-items');

  console.log('Category:' + CategoryName);
  console.log('Elements: ' + Cats.length);
});
