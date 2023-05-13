<script setup></script>

<template>
  <nav>
    <router-link to="/">My Progress</router-link> |
    <router-link to="/document">Documentation</router-link> |
    <button>Next Theme</button>
  </nav>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 100%;
  height: 100%;
  color: #2c3e50;
  background-image: url("./assets/Modern\ -\ 1.svg");
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  max-height: 100%;
  overflow: hidden;
  padding: 0 20px;
  overflow-y: auto;
  button {
    background-color: transparent;
    border: none;
    outline: none;
    font-weight: bold;
    color: #2c3e50;
    cursor: pointer;
    &:active {
      cursor: default;
      color: #42b983;
    }
    &::after {
      content: "☼";
      padding-left: 2px;
    }
  }
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
