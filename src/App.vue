<template>
  <JetsSeatmap
    :flight="flight"
    :config="config"
    @onTooltipRequested="onTooltipRequested($event)"
  ></JetsSeatmap>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import JetsSeatmap from "./components/jets-seatmap.vue";
import FLIGHT_MOCK from "./mock-data/flight_mock";
import CONFIG_MOCK from "./mock-data/config_mock";

export default {
  name: "App",
  components: {
    JetsSeatmap,
  },
  methods: {
    onTooltipRequested(data) {
      console.log("onTooltipRequested", data);
    },
  },
  data() {
    return {
      flight: FLIGHT_MOCK,
      config: CONFIG_MOCK,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
