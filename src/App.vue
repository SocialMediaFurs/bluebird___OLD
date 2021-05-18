<template>
  <div class="header">
    <span>
      <hr>
    </span>
    <div class="menu">
      <img src="../src/assets/menu.png" alt="Profilbild" width="32" height="32">
    </div>
  </div>
  <div class="profil">
    <h1>Noataks Profil</h1>
  </div>
  <div class="nav">
    <div>
      <img src="../src/assets/akuma.jpg" alt="Akuma">
    </div>
    <span class="nav-mobile">
      <router-link to="/">Home</router-link>
      <router-link to="/post">Post</router-link>
      <router-link to="/profil">Profil</router-link>
      <router-link to="/about">About</router-link>
    </span>
  </div>
  <div class="content">
    <router-view />
  </div>
  <div class="footer"></div>
</template>

<style lang="scss">
@import "assets/variables/variables";

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
    margin: $spacing-8 $spacing-20;

    hr {
      background-color: $link;
      height: 1.5px;
      border-radius: 1px;
      border: 0;
    }
  }

  .menu {
    margin-right: $spacing-16;
  }
}

.nav {
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 30px;
  height: fit-content;
  width: 90%;

  img {
    border-radius: 50%;
    margin-bottom: 30px;
    box-shadow: 6px 6px 15px 2px $shadow;
  }

  a {
    color: $link;
    margin: 10px 0;
    border-bottom: 0;
    text-decoration: none;
    text-align: left;
    padding: 6px 19px;
  }
  .router-link-exact-active {

    border-bottom: 2px solid $link;
  }

  &-mobile {
    padding-bottom: $spacing-8;
    border-bottom: 1px solid $link;
    width: fit-content;
    margin: auto;
  }

  @media (min-width: $breakpoint-tablet) {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 25px;
    margin: 117px auto;
    padding: 30px;
    height: fit-content;
    width: 300px;
    border-radius: 20px;
    background-color: $brand;

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

    &-mobile {
      border-bottom: 0;
      display: flex;
      flex-direction: column;
    }
  }
}

.content {
  width: 100%;

  @media (min-width: $breakpoint-tablet) {
    width: calc(100% - 300px - 25px);
  }
}
.footer {
  height: 20px;
}
</style>
