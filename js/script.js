console.log('welcome')

const todoInput = document.querySelector('.todo-input')
const todoBtn = document.querySelector('.todo-btn')
const todoResult = document.querySelector('.todo-result')

function addTodo(e)
{
    e.preventDefault();

    const todoLi = document.createElement("Li")
    todoLi.classList.add('border')
    todoLi.classList.add('py-2')
    todoLi.classList.add('px-4')
    todoLi.classList.add('my-1')

    const todoTitle = document.createElement('h4')
    todoTitle.classList.add('d-inline-block')
    todoTitle.innerText=todoInput.value
    todoLi.appendChild(todoTitle)

    const todoAction = document.createElement('div')
    todoAction.classList.add('action-div')
    todoAction.classList.add('d-inline-block')
    

    const btncompelte = document.createElement('button')
    btncompelte.classList.add('btn')
    btncompelte.classList.add('btn-primary')
    btncompelte.innerHTML = '<i class="fa-sharp fa-solid fa-check"></i>'
    todoAction.appendChild(btncompelte)

    const btndelete = document.createElement('button')
    btndelete.classList.add('btn')
    btndelete.classList.add('btn-danger')
    btndelete.innerHTML = '<i class="fa-sharp fa-solid fa-trash"></i>'
    todoAction.appendChild(btndelete)
    todoLi.appendChild(todoAction)





    todoResult.appendChild(todoLi)
    console.log(todoInput.value)
    todoInput.value=''

}

todoBtn.addEventListener('click',addTodo)