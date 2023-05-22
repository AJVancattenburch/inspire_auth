import { Pop } from "../utils/Pop.js"
import { imagesService } from "../services/ImagesService.js"
import { AppState } from "../AppState.js"
import { setHTML } from "../utils/Writer.js"

function _drawImage() {
  const image = AppState.images
  // console.log(image)
  document.body.style.backgroundImage = `url('${image.url}')`
  document.getElementById('imageInfo').innerHTML = image.ImageTemplate

}


export class ImagesController {
  constructor() {
    // console.log('hello from images controller')
    AppState.on('images', _drawImage)
    this.getAllImages()
  }

  async getAllImages() {
    try {
      // console.log('waiting on service for images')
      await imagesService.getAllImages()
    } catch (error) {
      console.error('error',error)
      Pop.toast('Images ran away', error)
    }
  }

  // NOTE REQUEST A GET METHOD TO GET THE SPECIFIC PICTURE BASED ON IT'S DATE
  // async selectDate() {
  //   try {
  //     // NOTE GRAB THAT SPECIFIC INPUT
  //     let dateElem = document.getElementById('date')
  //     // NOTE THEN ALIAS OUT THAT INPUTS VALUE
  //     let dateValue = dateElem.value
  //     console.log('[SELECTING DATE]', dateValue)
  //     // NOTE MAKE SURE THE VARIABLE YOU'RE PASSING THROUGH IS THE ONE YOU ALIASED
  //     await nasaService.selectDate(dateValue)
  //   } catch (error) {
  //     logger.error('[ERROR]',error)
  //     Pop.error(('[ERROR]'), error.message)
  //   }
  // }











}

