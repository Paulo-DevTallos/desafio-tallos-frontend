import { createStore } from "vuex";
import createPersistedState from 'vuex-persistedstate';
import Services from '../services/axios-request';

export const store = createStore({
  state: {
    user: {
      email: '',
      password: '',
    },
    token: '',
  },
  getters: {

  },
  mutations: {
    authSet(state, payload) {
      state.token = payload.access_token
      state.user = payload.user
    }
  },
  actions: {
    async handleSubmitLogin(context, user) {
      await Services.loginUser({
        email: user.email,
        password: user.password
      })
      .then(res => {
        console.log(res)
        if(res.data.access_token) {
          localStorage.setItem('token', res.data.access_token)
          context.commit('authSet', res.data)

          window.location.replace('/painel')
        }
      })
    }
  },
  modules: {

  },
  plugins: [createPersistedState()], 
})
