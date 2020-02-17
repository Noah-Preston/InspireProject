import store from "../store.js";
import Todo from "../models/todos.js";

// @ts-ignore
const todoApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/Noah/todos/",
  timeout: 8000
});

class TodoService {
  getTodos() {
    todoApi.get("").then(res => {
      let todoData = res.data.data.map(t => new Todo(t))
      store.commit("todos", todoData)
    })
      .catch(err => {
        console.error(err)
      })
  }

  addTodo(todo) {
    todoApi.post("", todo).then(res => {
      let newTodo = new Todo(res.data.data)
      let myTodos = [...store.State.todos, newTodo]
      store.commit("todos", myTodos)
    })
      .catch(err => {
        console.error(err)
      })
  }

  toggleTodoStatus(todoId) {
    let todo = store.State.todos.find(todo => todo._id == todoId);
    if (todo && todo.completed === true) {
      todo.complete = false
    } else if (todo && todo.completed === false) {
      todo.completed = true
    }

    todoApi.put(todoId, todo).then(res => {
      store.commit("todos", store.State.todos)
    })
      .catch(err => {
        console.error(err)
      })
  }

  removeTodo(todoId) {
    todoApi.delete(todoId).then(res => {
      let filteredTodos = store.State.todos.filter(t => t._id != todoId)
      store.commit("todos", filteredTodos)
    })
      .catch(err => {
        console.error(err)
      })
  }
}

const todoService = new TodoService();
export default todoService;
