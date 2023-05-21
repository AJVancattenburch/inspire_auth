export class ToDo {
  constructor(data) {
    this.id = data.id
    this.completed = data.completed || false
    this.description = data.description || ''
    this.creatorId = data.creatorId || []
  }

  static toDoForm() {
    return /* html */ `
    <form onsubmit="app.ToDosController.createToDo()">
      <div class="d-flex w-75 flex-column">
      </div>
      <div class="d-flex w-75 flex-column flex-grow-1">
        <label for="description">Description</label>
        <input type="text" placeholder="Description...." id="description">
      </div>
      <div class="d-flex w-75 flex-column">
        <label for="creator">Written By</label>
        <input type="text" placeholder="Reported By...." id="creatorId">
      </div>
      <div class="d-flex w-75 align-items-end">
        <button class="btn btn-success">Submit</button>
      </div>
    </form>
    `
  }

  get EditTemplate() {
    return /* html */ `
    <tr class="selectable w-75 ms-4" id="${this.id}">
      <td style="opacity: 70%;" class="p-2" contentEditable id="${this.id}-description"></td>
      <td style="opacity: 70%;" class="p-2" contentEditable id="${this.id}-creatorId"></td>
      <td style="opacity: 70%;" class="p-2">
        <input class="text-light" type="checkbox" ${this.completed ? 'checked' : ''} id="${this.id}-completed">🔻
      </td>
      <td style="opacity: 70%;" class="p-2 d-flex align-items-center"> 
        <button class="btn btn-success" onclick="app.ToDosController.editToDo('${this.id}')">Save</button>
        <p class="m-0 ms-2 selectable p-2" onclick="app.ToDosController.closeEdit('${this.id}')"> Cancel </p>
      </td>
    </tr>
    `
  }

  get Template() {
    return /* html */`
    <tr class="selectable" id="${this.id}">
      <td style="opacity: 90%;" class="p-2">${this.description}</td>
      <td style="opacity: 90%;" class="p-2">${this.creatorId}</td>
      <td style="opacity: 90%;" class="p-2"><i class="mdi mdi-${this.completed ? 'check text-success' : 'completed text-danger'}"></i></td>
      <td class="on-hover"> 
          <i class="mdi mdi-dots-vertical" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          </i>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li class="dropdown-item" onclick="app.ToDosController.openEdit('${this.id}')">Edit</li>
            <li class="dropdown-item" onclick="app.ToDosController.deleteToDo('${this.id}')">Delete</li>
          </ul>
      </td>
    </tr>`
  }

}