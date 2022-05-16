// Перший варіант
const categoriesEl = document.querySelectorAll('.item')
console.log('Number of categories:', categoriesEl.length)
console.log('')
const categoryEl = categoriesEl.forEach(category => {  
    console.log('Category:', category.firstElementChild.textContent)
    console.log('Elements:', category.lastElementChild.childElementCount)
    console.log('')
})