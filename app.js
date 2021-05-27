const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//eventlisteners
todoButton.addEventListener("click",addTodo);
todoList.addEventListener('click',deleteCheck);



//functions

function addTodo(event){
    event.preventDefault();

    //check input filed is empty or not
    if(todoInput.value=="")
    {
        alert("Enter your work :)");
    }
    
    else
    {
        //Todo Div
        const todoDiv = document.createElement('div');
        todoDiv.classList.add("todo");

        //create li
        const newTodo = document.createElement('li');
        newTodo.innerText = todoInput.value;
        newTodo.classList.add('todo-item');

        todoDiv.appendChild(newTodo);

        //create checkmark button
        const completedButton = document.createElement('button');
        completedButton.innerHTML = '<i class="fas fa-check"></i>';
        completedButton.classList.add("complete-btn");

        todoDiv.appendChild(completedButton);

        //create trash button
        const trashButton = document.createElement('button');
        trashButton.innerHTML = '<i class="fas fa-trash"></i>';
        trashButton.classList.add("trash-btn");

        todoDiv.appendChild(trashButton);

        //append to biglist
        todoList.appendChild(todoDiv);

        //clear todoInput
        todoInput.value = "";

        //store into localStorage
        
    }
}
function deleteCheck(e){
    const item = e.target;
    //delete todo
    if(item.classList[0] === "trash-btn"){
        const todo = item.parentElement;
        todo.classList.add("fall");
        todo.addEventListener('transitionend',function(){
            todo.remove();
        });
    }
    if(item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}

function darkMode(){
    document.getElementById('main').classList.toggle('todo-dark');
}




