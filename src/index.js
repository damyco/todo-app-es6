
import { renderTodos } from './views'
import { setFilters } from './filters'
import { createTodo, loadTodos } from './todos'

renderTodos()

document.querySelector('#search-text').addEventListener('input', (e) => {
    setFilters({
        searchText: e.target.value
    })
    renderTodos()
})


document.querySelector('#add-todo').addEventListener('submit', (e) => {
    const text = e.target.elements.addTodoInput.value.trim()
    e.preventDefault()

    if (text.length > 0) {
        createTodo(text)
        renderTodos()
        e.target.elements.addTodoInput.value = ''
    }
})

document.querySelector('#hide-completed').addEventListener('change', (e) => {
    setFilters({
        hideCompleted: e.target.checked
    })
    renderTodos()
})


window.addEventListener('storage', (e) => {
    if (e.key === 'todos') {
        loadTodos()
        renderTodos()
    }
})