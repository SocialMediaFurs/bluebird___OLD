<template>
  <p v-if="googleUser">Eingeloggt mit: <span class="userMail">{{googleUser.email}}</span></p>
  <button @click="test">test</button>
  <div v-if="!googleUser">
    <p>Google Login</p>
    <button @click="googleSignIn" class="google"></button>
  </div>
  <div v-else>
    <p>LogOut</p>
    <button @click="googleLogOut" class="logout">Logout</button>
  </div>


</template>
<script>
import firebase from "firebase";

export default {
  data: function () {
    return {
      idToken: null,
    };
  },
  computed: {
    googleUser() {
      return this.$store.getters.getCurrentUser;
    },
  },
  created() {
    firebase.auth().onAuthStateChanged(googleUser => {
      this.$store.commit("setCurrentUser", googleUser || null)
      this.$router.push('/login/' + googleUser.uid)
    })
  },
  methods: {
    googleSignIn() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider).then(() => {
      }).catch(err => {
        console.log(err)
      });
    },
    test() {
      var credential = firebase.auth.GoogleAuthProvider.credential(this.idToken);
      firebase.auth().signInWithCredential(credential).catch(() => {
      });
    },
    googleLogOut() {
      firebase.auth().signOut().then(() => {
      }).catch(err => {
        console.log("fehler beim ausgeloggen: " + err)
      })
    }
  },
  mounted() {
  }
};
</script>

<style scoped lang="scss">
@import "../assets/variables/variables";

.userMail{
  color: $fontLight;
}
.google {
  height: 100px;
  width: 100px;
  background-color: $secondary;
  border: 0;
  background-image: url("../assets/logos/Google_Logo.png");
  background-size: 100px;
  cursor: pointer;
}
p {
  font-size: 1.3em;
}
img {
  width: 100px;
  height: auto;
}
</style>
