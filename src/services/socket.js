import { io } from "socket.io-client"

class SocketModules {
  socket
  constructor() {}

  setupSocketConncection(){
    this.socket = io('http://localhost:3002')
  }
}

export default new SocketModules()