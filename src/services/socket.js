import { io } from "socket.io-client"

export default {
	connectionSocket: () => {
		console.log('connection')
		return io('http://localhost:3002')
	}
}
