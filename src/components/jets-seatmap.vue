<script>
import React from 'react';
import { JetsSeatMap } from '@seatmaps.com/react-lib';

import ReactDOM from 'react-dom';
import { h } from 'vue';

export default {
  name: 'JetsSeatmap',

  props: {
    flight: { type: Object, default: () => ({}) },
    config: { type: Object, default: () => ({}) },
    availability: { type: Array, default: () => [] },
    passengers: { type: Array, default: () => [] },
    seatJumpTo: { type: Object, default: () => null },
    currentDeckIndex: { type: Number, default: 0 },
  },

  emits: [
    'onSeatMapInited',
    'onSeatSelected',
    'onSeatUnselected',
    'onTooltipRequested',
    'onLayoutUpdated',
    'onSeatMouseLeave',
    'onSeatMouseClick',
    'onAvailabilityApplied',
  ],

  watch: {
    flight: 'renderReact',
    config: 'renderReact',
    availability: 'renderReact',
    passengers: 'renderReact',
    seatJumpTo: {
      handler: 'renderReact',
      deep: true,
    },
    currentDeckIndex: 'renderReact',
  },

  methods: {
    renderReact() {
      const self = this;
      const reactProps = {
        flight: this.flight,
        config: this.config,
        availability: this.availability,
        passengers: this.passengers,
        seatJumpTo: this.seatJumpTo,
        currentDeckIndex: this.currentDeckIndex,

        onSeatMapInited: function (data) {
          console.log(
            '[@seatmaps.com/react-lib-vue-wrapper] onSeatMapInited:',
            data
          );
          self.$emit('onSeatMapInited', data);
        },
        onSeatSelected: function (data) {
          self.$emit('onSeatSelected', data);
        },
        onSeatUnselected: function (data) {
          self.$emit('onSeatUnselected', data);
        },
        onTooltipRequested: function (data) {
          console.log(
            '[@seatmaps.com/react-lib-vue-wrapper] onTooltipRequested:',
            data
          );

          self.$emit('onTooltipRequested', data);
        },
        onLayoutUpdated: function (data) {
          console.log(
            '[@seatmaps.com/react-lib-vue-wrapper] onLayoutUpdated:',
            data
          );
          self.$emit('onLayoutUpdated', data);
        },
        onSeatMouseLeave(data) {
          self.$emit('onSeatMouseLeave', data);
        },
        onSeatMouseClick(data) {
          console.log(
            '[@seatmaps.com/react-lib-vue-wrapper] onSeatMouseClick:',
            data
          );
          self.$emit('onSeatMouseClick', data);
        },
        onAvailabilityApplied(data) {
          console.log(
            '[@seatmaps.com/react-lib-vue-wrapper] onAvailabilityApplied:',
            data
          );
          self.$emit('onAvailabilityApplied', data);
        },
      };

      console.log(
        '[@seatmaps.com/react-lib-vue-wrapper] RENDER REACT METHOD: ',
        {
          reactProps,
        }
      );

      ReactDOM.render(
        React.createElement(JetsSeatMap, reactProps),
        this.$refs.wrapper
      );
    },
  },

  mounted() {
    this.renderReact();
  },

  beforeDestroy: function () {
    ReactDOM.unmountComponentAtNode(this.$refs.wrapper);
  },

  render: function () {
    return h('div', {
      ref: 'wrapper',
    });
  },
};
</script>
