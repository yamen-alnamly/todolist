const todoList = [];
rendertodolist();

function rendertodolist() {
    let todoListHTML = '';
    for (let i = 0; i < todoList.length; i++) {
        const todo = todoList[i];
      //  const name = todo.name;
      //  const dueDate = todo.dueDate;
      const {name , dueDate} = todo;
        const html = `
        <div class="list"><li>
        ${name} ${dueDate}
        <button onclick=" todoList.splice(${i}, 1);
        rendertodolist();">Delete</button></li></div>`;
        todoListHTML += html;
    }
    console.log(todoListHTML);
    document.querySelector('.addlist').innerHTML = todoListHTML;
}
function addTodos() {

    let inputitem = document.querySelector('.todo');
    let inputDate = document.querySelector('.todoDate')
    let name = inputitem.value;
    let dueDate = inputDate.value;
    if (inputitem.value != '' && inputDate.value != '')
     {
        console.log(name);
        todoList.push({name  , dueDate});
      
        console.log(todoList);
        inputitem.value = '';
        rendertodolist();
    }
}
