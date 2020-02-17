export default class Todo {
  constructor(data) {
    this._id = data._id || ""
    this.completed = data.complted || false
    this.user = data.user || ""
    this.description = data.description || ""
  }

  get tTemplate() {
    return `
    <li class="mt-2 text-center text-dark list-group-item bg-info">${this.btn}   ${this.description} <button class="btn btn-sm btn-danger" onclick="app.todoController.removeTodo('${this._id}')">X</button></li>
    `
  }


  get btn() {
    if (this.completed === true) {
      return `
      <button class="btn btn-sm btn-success" onclick="app.todoController.changeStatus('${this._id}')">√</button>
      `
    } else if (this.completed === false)
      return `
    <button class="btn btn-sm btn-dark" onclick="app.todoController.changeStatus('${this._id}')">O</button>
    `
  }
}

