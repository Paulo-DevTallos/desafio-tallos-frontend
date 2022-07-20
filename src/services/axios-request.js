import { http } from "./axios-config"

export default {
  listar: () => {
    return http.get('/listusers') 
  },
  createUser: (data) => {
    return http.post('/register', data)
  },
  loginUser: (data) => {
    return http.post('/login', data)
  },
  findOne: (email) => {
    return http.get(`/finduser/${email}`)
  },
  removeUser: (email) => {
    return http.delete(`/remove/${email}`)
  }
}