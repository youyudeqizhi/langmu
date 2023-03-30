import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import TDesign from "tdesign-vue-next";
import router from "./route";
import Vant from "vant";
import "vant/lib/index.css";

createApp(App).use(TDesign).use(router).use(Vant).mount("#app");
