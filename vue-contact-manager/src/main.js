import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./styles.css";

// Font Awesome Icons
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";

// Bootstrap css, JS
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

createApp(App).use(router).mount("#app");
