import { AboutController } from "./controllers/AboutController.js";
// import { HomeController } from "./controllers/HomeController.js";
import { ToDosController } from "./controllers/ToDosController.js";

export const router = [
  {
    path: '',
    controller: [ToDosController]
  },
  {
    path: '#/about',
    controller: AboutController
  },
  
]