import { AppState } from "../AppState.js"
import { api } from "./AxiosService.js"
import { ToDo } from './../models/ToDo.js';

class ToDosService {
  async getAllToDos() {
    const res = await api.get('api/todos')
    const toDos = res.data.map(t => new ToDo(t))
    AppState.toDos = toDos
  }

  async createToDo(formData) {
    const res = await api.post('api/todos', formData)
    console.log(formData)
    const newToDo = new ToDo(res.data)
    AppState.toDos.push(newToDo)
    AppState.toDos = AppState.toDos
  }

  async editToDo(id) {
    const update = AppState.toDos.find(t => t.id == id)
    update.completed = !update.completed
    const res = await api.put('api/todos/' + id, update)
    const index = AppState.toDos.findIndex(t => t.id == id)
    if (index == -1) {
    console.log('no splicing for you!', error)
    }
    AppState.toDos.splice(index, 1, new ToDo(res.data))
    AppState.emit('toDos', id)
  }

  async deleteToDo(id) {
    const res = await api.delete('api/todos/' + id)
    console.log('GO AWAY TO-DO LIST!', res.data) 
    AppState.toDos = AppState.toDos.filter(t => t.id != id)
  }
}

export const toDosService = new ToDosService()