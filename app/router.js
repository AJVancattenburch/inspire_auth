import { AboutController } from "./controllers/AboutController.js";
import { ToDosController } from "./controllers/ToDosController.js";
import { ImagesController } from "./controllers/ImagesController.js";
import { ClockController } from "./controllers/ClockController.js";
import { WeatherController } from "./controllers/WeatherController.js";
import { QuotesController } from "./controllers/QuotesController.js";

export const router = [
  {
    path: '',
    controller: [ToDosController, ImagesController, WeatherController, QuotesController, ClockController]
  },
  {
    path: '#/about',
    controller: AboutController
  },
  
]