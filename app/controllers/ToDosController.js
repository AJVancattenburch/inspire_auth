import { AppState } from "../AppState.js"
import { toDosService } from "../services/ToDosService.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"
import { ToDo } from "./../models/ToDo.js"

function _draw() {
  const toDos = AppState.toDos
  let template = `
  <tr>
    <th>Description</th>
    <th>Reported By</th>
    <th>Status</th>
  </tr>`
  toDos.forEach(toDo => template += toDo.Template)

  document.getElementById('toDos').innerHTML = template
}

function _drawForm() {
  setHTML('toDoForm', ToDo.toDoForm())
}

function _drawToDoCount() {
  const toDos = AppState.toDos
  const toDoCount = toDos.length
  const template = toDos.map(t => t.Template).join('')
  setHTML('toDos', template)
  document.getElementById('toDoCount').innerText = toDoCount.toString()
  console.log('sssoooooo...')
}


export class ToDosController {
  constructor() {
    AppState.on('toDos', _draw)
    AppState.on('account', this.getAllToDos)
    AppState.on('toDos', _drawToDoCount)
    _drawForm()
  }

  async getAllToDos() {
    try {
      await toDosService.getAllToDos()
    } catch (error) {
      console.log(error)
    }
  }

  async createToDo() {
    try {
      window.event.preventDefault()
      /** @type {HTMLFormElement} */
      // @ts-ignore
      const form = window.event.target
      const rawData = {
        description: form.description.value,
        creatorId: form.creatorId.value
      }
      toDosService.createToDo(rawData)

      form.reset()
      Pop.toast('ToDo Created', 'success')

    } catch (error) {
      console.log(error)
      Pop.toast('Something went wrong', "error")
    }

  }

  openEdit(id) {
    const toDo = AppState.toDos.find(t => t.id == id)
    document.getElementById(id).innerHTML = toDo.EditTemplate
    document.getElementById(id + '-description').focus()
  }

  async closeEdit(id) {
    if (!await Pop.confirm("Are You Sure?", "All Changes will be Reverted", "warning", "Continue Editing")) {

      const toDo = AppState.toDos.find(t => t.id == id)
      document.getElementById(id).innerHTML = toDo.Template
    }
  }

  async editToDo(id) {
    try {
      const update = {
        id,
        description: document.getElementById(id + '-description').innerText,
        creatorId: document.getElementById(id + '-creatorId').innerText,
        completed: document.getElementById(id + '-completed').checked
      }
      await toDosService.editToDo(update)
      Pop.toast('Saved', 'success')
    } catch (error) {
      console.log(error)
      Pop.toast('Something went wrong', "error")
    }

  }

  async deleteToDo(id) {
    try {
      if (await Pop.confirm()) {
        await toDosService.deleteToDo(id)
        Pop.toast('Deleted', 'success')
      }
    } catch (error) {
      console.log(error)
      Pop.toast('Something went wrong', "error")
    }
  }
}