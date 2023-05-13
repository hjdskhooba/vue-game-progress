import { createStore } from "vuex";
import { progressModule } from "./Progress/ProgressModule";

export default createStore({
  isAuth: false,
  modules: {
    progress: progressModule,
  },
});
