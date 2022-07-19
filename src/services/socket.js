/*import { io } from "socket.io-client";

export default socket = io('http://localhost:3001')*/

import { io } from 'socket.io-client'


export default class SocketModule {

    constructor(socket) {
        this.socket = socket
    }

    SocketConnection() {
        this.socket = io('http://localhost:3001')
    }
}