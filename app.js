const button = document.querySelector('#submit');
const todoList = document.querySelector('#list');
const titleInput = document.querySelector('#title-input');
const filterSelector = document.querySelector('.filters');


todoList.addEventListener('click', checkEvent);
filterSelector.addEventListener('click', filterTodo);
button.addEventListener('click', function (e) {
    e.preventDefault();

    const newItem = document.createElement('li');
    newItem.classList.add('item');
    newItem.innerText = titleInput.value;

    const completeButton = document.createElement('button');
    completeButton.innerText = 'done';
    completeButton.classList.add('btn-done');

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'delete';
    deleteButton.classList.add('btn-delete');

    newItem.append(deleteButton, completeButton);

    todoList.appendChild(newItem);
});

function checkEvent(e) {
    e.preventDefault();
    e.stopPropagation();
    const item = e.target;

    if(item.classList[0] === 'btn-done') {
        const todoElement = item.parentElement;
        todoElement.classList.toggle('completed');
    }

    if(item.classList[0] === 'btn-delete') {
        const todoElement = item.parentElement;
        todoElement.remove();
    }
}

function filterTodo(e){
    const todos = todoList.childNodes;

    todos.forEach((todo) => {
        switch (e.target.value) {
            case "all":
                todo.style.display = 'block';
                break;
            case 'done':
                if (todo.classList.contains('completed')) {
                    todo.style.display = 'block';
                } else {
                    todo.style.display = 'none';
                }
                break;
            case 'todo':
                if (!todo.classList.contains('completed')) {
                    todo.style.display = 'block';
                } else {
                    todo.style.display = 'none';
                }
        }
    })
}
