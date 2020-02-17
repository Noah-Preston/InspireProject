import TodoService from "../services/todo-service.js";
import store from "../store.js";

function _drawTodos() {
  let myTodos = store.State.todos
  let template = ""
  myTodos.forEach(x => {
    template += x.tTemplate
  })
  template += `<li class="bg-light text-dark text-center list-group-item mt-1">Todos: ${store.State.todos.length} </li>`
  document.getElementById("todo-list").innerHTML = template
}

export default class TodoController {
  constructor(
  ) {
    store.subscribe("todos", _drawTodos)
    TodoService.getTodos();
  }

  addTodo(event) {
    event.preventDefault();
    let form = event.target;
    let todo = {
      description: form.description.value
    };
    TodoService.addTodo(todo);
  }
  changeStatus(todoId) {
    TodoService.toggleTodoStatus(todoId);
    _drawTodos()
  }
  removeTodo(todoId) {
    // @ts-ignore
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    })
    TodoService.removeTodo(todoId);
    // @ts-ignore
    Swal.fire(
      'Deleted!',
      'Your file has been deleted.',
      'success'
    )
  }
}

