import { setHTML } from '../utils/Writer.js'

// Private
function _draw() {
  setHTML('app', '<h1>This is the About Page</h1>')
}

// Public
export class AboutController {
  constructor() {
    _draw()
  }

}
