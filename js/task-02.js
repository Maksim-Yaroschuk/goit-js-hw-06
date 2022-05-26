// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul.ingredients.


const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients')
const ingredientsElArr = []
ingredients.forEach(ingredient => {
  const ingredientEl = document.createElement('li')
        ingredientEl.classList.add('item')
        ingredientEl.textContent = ingredient
        ingredientsElArr.push(ingredientEl)
})
ingredientsEl.append(...ingredientsElArr)
