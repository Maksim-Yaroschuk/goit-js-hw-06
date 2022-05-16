// Перший варіант
const categoriesEl = document.querySelectorAll('.item')
console.log('Number of categories:', categoriesEl.length)
console.log('')
const categoryEl = categoriesEl.forEach(category => {  
    console.log('Category:', category.firstElementChild.textContent)
    console.log('Elements:', category.lastElementChild.childElementCount)
    console.log('')
})


// console.log('')
// console.log('Другий варіант')
// // Другий варіант
// const categorEl = document.querySelector('#categories')
// console.log('Number of categories 2.0:', categorEl.childElementCount)
// console.log(categorEl.children)

// const cat1 = document.querySelector('#categories')
// console.log(cat1.querySelectorAll('.item'))

// const categoryFirstEl = document.querySelector('.item')
// console.log('Category:', categoryFirstEl.firstElementChild.textContent)
// console.log('Elements:', categoryFirstEl.querySelectorAll('li').length)

// console.log(categoryFirstEl.lastElementChild.textContent)

// const cat = document.querySelectorAll('.item')
// console.log(cat)