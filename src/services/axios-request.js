import { http } from "./axios-config"

export default {
  listar: () => {
    return http.get('/api/listusers') 
  },
  createUser: (data) => {
    return http.post('/api/register', data)
  },
  loginUser: (data) => {
    return http.post('/api/login', data)
  },
  findOne: (email) => {
    return http.get(`/api/finduser/${email}`)
  },
  update: (email) => {
    return http.patch(`/apiupdate/${email}`)
  },
  removeUser: (email) => {
    return http.delete(`/api/remove/${email}`)
  }
}