<template>
  <JetsSeatmap
    :flight="flight"
    :config="config"
    :availability="availability"
    :passengers="passengers"
    :seatJumpTo="seatJumpTo"
    :currentDeckIndex="currentDeckIndex"
    @onSeatMapInited="onSeatMapInited"
    @onSeatSelected="onSeatSelected"
    @onSeatUnselected="onSeatUnselected"
    @onTooltipRequested="onTooltipRequested"
    @onLayoutUpdated="onLayoutUpdated"
    @onSeatMouseLeave="onSeatMouseLeave"
    @onSeatMouseClick="onSeatMouseClick"
    @onAvailabilityApplied="onAvailabilityApplied"
  ></JetsSeatmap>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import JetsSeatmap from './components/jets-seatmap.vue';
import FLIGHT_MOCK from './mock-data/flight_mock';
import CONFIG_MOCK from './mock-data/config_mock';
import AVAILABILITY_MOCK from './mock-data/availability_mock';
import PASSENGERS_MOCK from './mock-data/passengers_mock';

export default {
  name: 'App',
  components: {
    JetsSeatmap,
  },
  data() {
    return {
      flight: FLIGHT_MOCK,
      config: CONFIG_MOCK,
      availability: AVAILABILITY_MOCK,
      passengers: PASSENGERS_MOCK,
      seatJumpTo: null,
      currentDeckIndex: 0,
    };
  },
  methods: {
    onSeatMapInited(data) {
      console.log('onSeatMapInited:', data);
    },
    onSeatSelected(data) {
      console.log('onSeatSelected:', data);
    },
    onSeatUnselected(data) {
      console.log('onSeatUnselected:', data);
    },
    onTooltipRequested(data) {
      console.log('onTooltipRequested', data);
    },
    onLayoutUpdated(data) {
      console.log('onLayoutUpdated:', data);
    },
    onSeatMouseLeave(data) {
      console.log('onSeatMouseLeave:', data);
    },
    onSeatMouseClick(data) {
      console.log('onSeatMouseClick:', data);
    },
    onAvailabilityApplied(data) {
      console.log('onAvailabilityApplied:', data);
    },
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
