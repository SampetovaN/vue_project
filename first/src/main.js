import { createApp } from "vue";
import App from "./App";
import router from "@/router/index";
import "@/assets/styles/style.scss";
const app = createApp(App);
app.use(router);
app.mount("#app");
