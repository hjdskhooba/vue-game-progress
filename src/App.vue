<script setup>
import { mapActions, mapState } from "@/utils/mapHelpers";
import { computed } from "vue";
import { useStore } from "vuex";
const { changeTheme } = mapActions();
const store = useStore();
const currentTheme = computed(() => store.state.currentTheme);
</script>

<template>
  <div :class="'wrapper' + ' ' + currentTheme">
    <nav>
      <router-link to="/">My Progress</router-link> |
      <router-link to="/document">Documentation</router-link> |
      <button @click="changeTheme">Next Theme</button>
    </nav>
    <router-view />
  </div>
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
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  max-height: 100%;
  overflow: hidden;
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
.wrapper {
  position: absolute;
  width: 100%;
  max-width: 100%;
  // padding: 190.9px 0 0;
  height: 100%;
  max-height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  &.first {
    background-image: url("@/assets/Modern\ -\ 1.svg");
  }
  &.second {
    background-image: url("@/assets/Modern\ -\ 2.svg");
    h1 {
      color: black;
      -webkit-text-fill-color: rgb(000, 000, 000);
    }
    span {
      color: white;
    }
  }
  &.third {
    background-image: url("@/assets/Modern\ -\ 4.svg");
    -webkit-text-fill-color: rgb(255, 183, 0);
    filter: brightness(0.8);
    nav a.router-link-exact-active {
      color: #000000;
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
