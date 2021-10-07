import { createStore } from 'vuex';
import router from '@/router'
import {db} from '@/firebase/firebase'

export default createStore({
  state: {
    currentUser: null,
    currentProfil: null,
    isAdmin: false,
  },
  mutations: {
    setCurrentUser(state, payload) {
      state.currentUser = payload;
    },
    setCurrentProfil(state, payload) {
      state.currentUser = payload;
    },
    setIsAdmin(state, payload) {
      state.isAdmin = payload;
    }
  },
  actions: {
    async setProfil(state) {
      await db.collection('User').doc(router.currentRoute.value.params.user).get().then(snapshot => {
        const data = snapshot.data();
        console.log(data)
        state.commit("setCurrentProfil", data)
      })
    },
  },
  modules: {
  },
  getters: {
    getCurrentUser: state => state.currentUser,
    getCurrentProfil: state => state.currentProfil,
    getIsAdmin: state => state.isAdmin,
  }
});
