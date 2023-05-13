import { createApp } from "vue";
import App from "./App.vue";
import components from "./components/UI/index";
import store from "./store/index";
import router from "./router/index";
const app = createApp(App);

app.use(store);
app.use(router);
components.forEach((component) => {
  app.component(component.name, component);
});
app.mount("#app");
