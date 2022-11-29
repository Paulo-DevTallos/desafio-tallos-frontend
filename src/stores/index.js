import { createStore } from 'vuex'
import persistedState from 'vuex-persistedstate'
import userStore from './users/user-store'

export const store = createStore({
	modules: {
		userStore,
	},
	plugins: [persistedState()]
})
