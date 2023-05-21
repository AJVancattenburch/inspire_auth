import { useSockets } from '../env.js'
import { Pop } from '../utils/Pop.js'
import { SocketHandler } from '../utils/SocketHandler.js'

class SocketService extends SocketHandler {
  constructor() {
    super()
    if (!useSockets) { return }
    this
    this
      .on('error', this.onError)
  }

  onError(error) {
    Pop.error(error?.message || error || 'Something went wrong please try again later')
  }
}

export const socketService = new SocketService()
