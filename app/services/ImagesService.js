import { AppState } from '../AppState.js'
import { Image } from '../models/Image.js'
import { api } from './AxiosService.js'
class ImagesService {
  async getAllImages() {
    const res = await api.get('api/images')
    AppState.images = new Image(res.data)
  }
}

export const imagesService = new ImagesService()