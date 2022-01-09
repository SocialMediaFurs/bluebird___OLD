import {db} from '@/firebase/firebase'

export const loggedinUserModule = {
  state: {
    loggedinUser: [],
  },
  mutations: {
    setLoggedinUser(state, payload) {
      state.user = payload;
    },
  },
  actions: {
    async setLoggedinUser(state) {
      await db.collection('List').doc('kinks').get().then(snapshot => {
        const data = snapshot.data();
        console.table(data.allKinks)
        state.commit("setAllKinks", data.allKinks)
      })
    }
  },
  getters: {
    getLoggedinUser: state => state.loggedinUser,
  }
}
