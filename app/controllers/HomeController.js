import { AppState } from '../AppState.js'
import { valuesService } from '../services/ValuesService.js'
import { setHTML } from '../utils/Writer.js'

// Private
function _drawHome() {
  setHTML('app', /*html*/`
<div class="container-fluid">
  
  <div class="row my-3">
    <div class="col-lg-5">
      <div class="card p-2">
        <div class="card-title p-2">
          <div class="d-flex align-items-center">
            This is the Home Page
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="row" id="values"></div>

</div>
  `)
}

function _drawValues() {
  let template = ''
  AppState.values.forEach(v => {
    template += `<div><kbd>${v}</kbd></div>`
  })
  setHTML('values', template)
}

// Public
export class HomeController {
  constructor() {
    AppState.on('values', _drawValues)
    _drawHome()
  }

  addValue() {
    valuesService.addValue()
  }
}
