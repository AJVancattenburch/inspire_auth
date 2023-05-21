import { AppState } from '../AppState.js'
import { Value } from '../models/Value.js'

class ValuesService {
  addValue() {
    AppState.values = [...AppState.values, new Value({ title: Math.round(Math.random() * 20) })]
  }
}

export const valuesService = new ValuesService()