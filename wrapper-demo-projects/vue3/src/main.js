import { createApp } from "vue";
import App from "./App.vue";

import JetsSeatmap from "jets-seatmap-vue-wrapper";

const app = createApp(App);

app.use(JetsSeatmap);

app.mount("#app");
