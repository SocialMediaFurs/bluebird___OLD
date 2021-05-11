<template>
  <v-app>
    <v-navigation-drawer app>
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/post">Post</router-link> |
        <router-link to="/profil">Profil</router-link> |
        <router-link to="/about">About</router-link>
      </div>
    </v-navigation-drawer>

    <v-content fluid>
      <router-view />
    </v-content>
  </v-app>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  background-color: lavender;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
* {
  font-family: Roboto,serif;
  color: black;
}
</style>
