<template>
  <div class="background-transition h-screen">
    <div class="navbar-general">
      <router-link :to="{ name: 'About'}">About</router-link>
      <router-link :to="{ name: 'Profile'}">Profile</router-link>
      <router-link :to="{ name: 'Home'}">Home</router-link>
    </div>
    <div class="container m-auto">
      <router-view name="general"></router-view>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    generateToken (length) {
      let radom13chars = function () {
        return Math.random().toString(16).substring(2, 15)
      }
      let loops = Math.ceil(length / 13)
      return new Array(loops).fill(radom13chars).reduce((string, func) => {
        return string + func()
      }, '').substring(0, length)
    },
    random (length) {
      if (localStorage.getItem("token") === null) {
        console.log("if")
        localStorage.setItem("token", this.generateToken(length));
      }
      this.$store.commit("setToken", localStorage.getItem("token"));
    }
  },
  created() {
    this.random(20)
  },
};
</script>

<style>
.background-transition {
  background: linear-gradient(360deg, rgba(73, 59, 168, 0.74) 0%, #3362A9 57.29%);
}
</style>
