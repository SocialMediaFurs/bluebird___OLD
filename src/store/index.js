import { createStore } from 'vuex';
import {db} from '@/firebase/firebase'

export default createStore({
  state: {
    currentUser: null,
    currentProfil: null,
    allKinks: [],
    isAdmin: false,
  },
  mutations: {
    setCurrentUser(state, payload) {
      state.currentUser = payload;
    },
    setCurrentProfil(state, payload) {
      state.currentUser = payload;
    },
    setAllKinks(state, payload) {
      state.allKinks = payload;
    },
    setIsAdmin(state, payload) {
      state.isAdmin = payload;
    }
  },
  actions: {
    async setProfil(state) {
      await db.collection('User').doc(state.currentProfil).get().then(snapshot => {
        const data = snapshot.data();
        console.log(data)
        state.commit("setCurrentProfil", data)
      })
    },
    async setKinkList(state) {
      await db.collection('List').doc('kinks').get().then(snapshot => {
        const data = snapshot.data();
        console.table(data.allKinks)
        state.commit("setAllKinks", data.allKinks)
      })
    },
  },
  modules: {
  },
  getters: {
    getCurrentUser: state => state.currentUser,
    getCurrentProfil: state => state.currentProfil,
    getAllKinks: state => state.allKinks,
    getIsAdmin: state => state.isAdmin,
  }
});
