import JetsSeatmap from "./jets-seatmap.vue";

const components = {
  JetsSeatmap,
  install: (vue) => {
    vue.component("JetsSeatmap", JetsSeatmap);
  },
};

export default components;
