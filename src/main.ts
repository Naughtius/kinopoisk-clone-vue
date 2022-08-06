import { createApp } from "vue";
import App from "./App.vue";
import InlineSvg from "vue-inline-svg";
import router from "./router";
import store from "./store/index";
import i18n from "./i18n";
// Styles
import "./styles/common.scss";
// Components
import PremierMovie from "./components/PremierMovie.vue";
import Modal from "./components/Modal.vue";

const app = createApp(App);

app.component("inline-svg", InlineSvg);
app.component("premier-movie", PremierMovie);
// eslint-disable-next-line vue/multi-word-component-names
app.component("modal", Modal);

app.use(i18n).use(store).use(router).mount("#app");
