const form = document.querySelector('#todo-form')
const taskTitleInput = document.querySelector('#task-title-input')
const todoListUl = document.querySelector('#todo-list')

let tasks = []

function renderTaskOnHTML(taskTitle, done = false) {
    const li = document.createElement('li')

    const input = document.createElement('input')
    input.type = 'checkbox'
    input.addEventListener('change', (event) => {
        const liToToggle = event.target.parentElement

        const spanToToggle = liToToggle.querySelector('span')

        const done = event.target.checked
        if (done) {
            spanToToggle.style.textDecoration = 'line-through'
        } else {
            spanToToggle.style.textDecoration = 'none'
        }

        tasks = tasks.map(task => {
            if(task.title === spanToToggle.textContent) {
                return {
                    title: task.title,
                    done: !task.done
                }
            }

            return task
        })

        localStorage.setItem('tasks', JSON.stringify(tasks))
    })
    input.checked = done

    const span = document.createElement('span')
    span.textContent = taskTitle
    if(done) {
        span.style.textDecoration = 'line-through'
    }

    const button = document.createElement('button')
    button.classList.add('button')
    const iconTrash = document.createElement('i')
    iconTrash.classList.add('bi', 'bi-x')
    iconTrash.style.pointerEvents = 'none';
    button.appendChild(iconTrash)
    button.addEventListener('click', (event) => {
        const liToRemove = event.target.parentElement

        const titleToRemove = liToRemove.querySelector('span').textContent

        tasks = tasks.filter(task => task.title !== titleToRemove)

        todoListUl.removeChild(liToRemove)
        
        localStorage.setItem('tasks', JSON.stringify(tasks))
    })

    li.appendChild(input)
    li.appendChild(span)
    li.appendChild(button)

    todoListUl.appendChild(li)
}

window.onload = () => {
    const tasksOnLocalStorage = localStorage.getItem('tasks')

    if (!tasksOnLocalStorage) return

    tasks = JSON.parse(tasksOnLocalStorage)

    tasks.forEach(task => {
        renderTaskOnHTML(task.title, task.done)
    });
}

form.addEventListener('submit', (event) => {
    // Evita o comportamento padrão de recarregar a página ao submeter o formulário
    event.preventDefault() 

    const taskTitle = taskTitleInput.value

    if (taskTitle.length < 3) {
        alert('Sua tarefa precisa ter no mínimo 3 caracteres.')
        return;
    }

    // Adicionando a nova tarefa no array tasks
    tasks.push({
        title: taskTitle,
        done: false
    })

    localStorage.setItem('tasks', JSON.stringify(tasks))

    renderTaskOnHTML(taskTitle)

    taskTitleInput.value = ''
})