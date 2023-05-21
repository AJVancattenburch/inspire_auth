import { AppState } from '../AppState.js'
import { socketService } from '../services/SocketService.js'
import { logger } from '../utils/Logger.js'

function _drawSocketData() {
  logger.log('draw socket data', AppState.socketData)
}

export class SocketTestController {
  constructor() {
    AppState.on('socketData', _drawSocketData)
  }

  testSocket() {
    socketService.emit('SOCKET_TEST', { name: 'SOCKET_TEST', id: ~~(Math.random() * 99999) })
  }

  testAuthSocket() {
    socketService.emit('AUTH_TEST', { name: 'AUTH_TEST', id: ~~(Math.random() * 99999) })
  }
}
