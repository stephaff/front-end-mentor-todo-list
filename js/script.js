let btnAddTodo = document.querySelector('#todo-add');
let countTodo = 0;

btnAddTodo.addEventListener('click', addTodo);

function addTodo(){
    let todoLabel = document.querySelector('#todo-label');
    let mainContent = document.querySelector('main');
    if (todoLabel.value != ''){
        if (countTodo == 0) {
            countTodo++;
            mainContent.innerHTML = `<div class="todo-list">
            <input type="radio" name="todo-add" class="todo-add-items">
            <label class="todo-list-label">${todoLabel.value}</label>
            <div class="todo-list-delete">
              <img src="images/icon-cross.svg" alt="icon-cross" class="icon-cross">
            </div>
        </div>
        <div class="todo-list-details">
          <div class="todo-list-details-links">
            <p class="todo-left">${countTodo} items left</p>
          </div>
          <div class="todo-list-details-links-state">
            <a href="">All</a>
            <a href="">Active</a>
            <a href="">Completed</a>
          </div>
          <div class="todo-list-details-links link-remove">
            <a href="">Clear completed</a>
          </div>
        </div>`; 
        todoLabel.value = '';
        addEven();  
        }
        else{
            countTodo++;
            mainContent.innerHTML = `<div class="todo-list">
            <input type="radio" name="todo-add" class="todo-add-items">
            <label class="todo-list-label">${todoLabel.value}</label>
            <div class="todo-list-delete">
              <img src="images/icon-cross.svg" alt="icon-cross" class="icon-cross">
            </div>
        </div>${mainContent.innerHTML}`;
        todoLabel.value = ''
        addEven();
        }
    }
}

function addEven(){
    let todoState = document.querySelectorAll('.todo-add-items');
    todoState.forEach(element => {
        element.addEventListener('click', checkTodo);
    });
    let iconCross = document.querySelectorAll('.icon-cross');
    iconCross.forEach(element => {
        element.addEventListener('click', deleteTodo);
    });
    let todo = document.querySelectorAll('.todo-list');
    todo.forEach(element => {
      element.addEventListener('mouseover', displayIconCross);
  });
}

function deleteTodo(){
    if(countTodo >1){
        this.parentElement.parentElement.remove();
        countTodo--;
    }
    else{
        this.parentElement.parentElement.nextElementSibling.remove();
        this.parentElement.parentElement.remove();
        countTodo--;
    }
}

function checkTodo(){
    this.nextElementSibling.classList.toggle('todo-state');
}

function displayIconCross(){
  // alert('OK');
}