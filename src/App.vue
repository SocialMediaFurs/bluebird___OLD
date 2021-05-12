<template>
  <div class="header">
    <span>
      <hr>
    </span>
    <div class="menu">
      <img src="../src/assets/menu.png" width="32" height="32">
    </div>
  </div>
  <div id="nav">
    <img src="../src/assets/akuma.jpg" alt="Akuma">
    <router-link to="/">Home</router-link>
    <router-link to="/post">Post</router-link>
    <router-link to="/profil">Profil</router-link>
    <router-link to="/about">About</router-link>
  </div>
  <div class="content">
    <router-view />
  </div>
</template>

<style lang="scss">
$brand: #547EBD;
$secondary: #FFAA1D;//#493BA8;
$accent: #2c3e50;
$link: #fffdf1;
$link-active: #42b983;
$shadow: #00000066;

* {
  font-family: Roboto,serif;
  color: black;
}

#background {
  height: 100%;
  border-radius: 600px 0 0 0;
  background: darken($brand, 15);
}
html, body {
  background: $secondary;
  height: 100%;
}

#app {
  text-align: center;
  color: $accent;
}

.header {
  display: flex;
  flex-direction: row;

  span {
    width: calc(100% - 32px);
    margin: 8px 20px;

    hr {
      background-color: $link;
      height: 1.5px;
      border-radius: 1px;
      border: 0;
    }
  }

  .menu {
    margin-right: 15px;
  }
}

#nav {
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 25px;
  margin: auto;
  padding: 30px;
  height: fit-content;
  width: 300px;
  border-radius: 20px;
  background-color: $brand;

  img {
    border-radius: 50%;
    margin-bottom: 30px;
    box-shadow: 6px 6px 15px 2px $shadow;
  }

  a {
    color: $link;
    margin: 10px 0;
    border-bottom: 1px solid $link;
    text-decoration: none;
    text-align: left;
    padding: 0 0 5px 20px;

  }
  .router-link-exact-active {
    color: $link-active;
    border-bottom: 1px solid $link-active;
  }
}

.content {
  width: calc(100% - 300px - 25px);
}
</style>
