<template>
  <router-view></router-view>
</template>

<style lang="scss">
@import "./assets/variables/variables";

.navbar {
  width: 100%;
  height: 0%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  overflow-y: hidden;
  transition: 0.5s;

  &_open {
    @extend .navbar;
    height: 100vh; // <--- 100vh instead of 100%
  }

  &-content {
    width: 25%;
    height: 100vh;
    text-align: center;
    float: right;
    background: darken($brand, 15);

    &-header {
      background-color: $brand;
    }
  }

  a {
    @apply no-underline text-left px-4 my-0.5 block text-2xl font-light;
    background-color: $brand;
    color: $fontLight;
    transition: 1s;

    i {
      @apply text-2xl float-right;
      color: $fontLight;
    }

    &:hover, &:focus {
      color: $fontLight-secondary;
    }
  }

}
.navbar-general {
  @apply flex flex-row-reverse w-full text-right;

  a {
    color: $fontLight;
    margin: 10px 0;
    border-bottom: 0;
    text-decoration: none;
    text-align: left;
    padding: 6px 19px;
  }
  .router-link-exact-active {
    border-bottom: 2px solid $fontLight;
  }
}

* {
  font-family: Roboto,serif;
  color: #333333;
}
html, body {
  //background: darken($brand, 15);
  height: 100%;
}
h1, h2 {
  text-align: left;
  color: white;
  margin-left: $spacing-40 * 3;
}

.background-primary {
  background: darken($brand, 15);
}
#background {
  height: 100%;
  border-radius: 600px 0 0 0;
  background: darken($brand, 15);
}
#background-corner {
  background: $secondary;
}
#app {
  text-align: center;
  color: $accent;
}

.contentbox {
  width: 80%;
  margin: 10px auto;
  padding: 15px;
  border-radius: 20px;
  background-color: #547EBD;
}

.logout {
  margin-top: 20px;
  height: 25px;
  width: 80px;
  color: $fontLight;
  background-color: $warn;
  border: 2px solid darken($warn, 15%);
  border-radius: 10px;
}
.header {
  display: flex;
  flex-direction: row;

  span {
    width: calc(100% - 32px);
    margin: $spacing-8 $spacing-20;

    hr {
      background-color: $fontLight;
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

  a, p {
    color: $fontLight;
    margin: 10px 0;
    border-bottom: 0;
    text-decoration: none;
    text-align: left;
    padding: 6px 19px;
  }
  p {
    cursor: default;
  }
  .router-link-exact-active {

    border-bottom: 2px solid $fontLight;
  }

  &-mobile {
    padding-bottom: $spacing-8;
    border-bottom: 1px solid $fontLight;
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
      color: $fontLight;
      margin: 10px 0;
      border-bottom: 1px solid $fontLight;
      text-decoration: none;
      text-align: left;
      padding: 0 0 5px 20px;
    }

    .router-link-exact-active {
      color: $fontLight-secondary;
      border-bottom: 1px solid $fontLight-secondary;
    }

    &-mobile {
      border-bottom: 0;
      display: flex;
      flex-direction: column;
      width: 100%;
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
