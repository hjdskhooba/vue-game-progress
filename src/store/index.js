import { createStore } from "vuex";
import { progressModule } from "./Progress/ProgressModule";

export default createStore({
  isAuth: false,
  currentTheme: "first",
  modules: {
    progress: progressModule,
  },
  mutations: {
    updateTheme(state, next) {
      state.currentTheme = next;
    },
  },
  actions: {
    changeTheme({ state, commit }) {
      let nextTheme = "second";
      if (state.currentTheme == "first") {
        nextTheme = "second";
      } else if (state.currentTheme == "second") {
        nextTheme = "third";
      } else if (state.currentTheme == "third") {
        nextTheme = "first";
      } else {
        nextTheme = "first";
      }
      commit("updateTheme", nextTheme);
    },
  },
});
