<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <JetsSeatmap
      :flight="flight"
      :config="config"
      @onTooltipRequested="onTooltipRequested($event)"
    ></JetsSeatmap>
  </div>
</template>

<script>
import FLIGHT_MOCK from "./mock-data/flight_mock";
import CONFIG_MOCK from "./mock-data/config_mock";

export default {
  name: "App",
  components: {},
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
