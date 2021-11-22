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
<style>
.background-transition {
  background: linear-gradient(360deg, rgba(73, 59, 168, 0.74) 0%, #3362A9 57.29%);
}
</style>
