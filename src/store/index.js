import { createStore } from "vuex";
import { progressModule } from "./ProgressModule";

export default createStore({
  isAuth: false,
  modules: {
    progress: progressModule,
  },
});
