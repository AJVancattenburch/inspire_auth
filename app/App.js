import { AppState } from './AppState.js';
import { AuthController } from './controllers/AuthController.js';
import { router } from './router.js';

class App {
  AuthController = new AuthController()

  constructor() {
    window.addEventListener(
      "hashchange",
      () => this.handleRouteChange(),
      false
    );
  }

  handleRouteChange() {
    AppState.page = location.hash
    const currentRoute = router.find(r => r.path == location.hash)
    if (!currentRoute) {
      throw new Error('404 No Matching Route Found')
    }
    if (Array.isArray(currentRoute.controller)) {
      return currentRoute.controller.forEach(c => {
        this[c.name] = new c()
      })
    }
    this[currentRoute.controller.name] = new currentRoute.controller()
  }

}


const app = new App()
app.handleRouteChange()
AppState.init()
// @ts-ignore
window.app = app
