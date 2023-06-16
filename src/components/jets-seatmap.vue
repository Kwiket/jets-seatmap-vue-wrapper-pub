<script>
import { JetsSeatMap } from "jets_seatmap_react_lib";
import React from "react";

import ReactDOM from "react-dom";
import { h } from "vue";

export default {
  name: "JetsSeatmap",

  props: ["flight", "config", "availability", "passengers"],

  emits: [
    "onSeatMapInited",
    "onSeatSelected",
    "onSeatUnselected",
    "onTooltipRequested",
    "onLayoutUpdated",
  ],

  mounted() {
    const self = this;
    const reactProps = {
      flight: this.flight,
      config: this.config,
      availability: this.availability,
      passengers: this.passengers,
      onSeatMapInited: function (data) {
        self.$emit("onSeatMapInited", data);
      },
      onSeatSelected: function (data) {
        self.$emit("onSeatSelected", data);
      },
      onSeatUnselected: function (data) {
        self.$emit("onSeatUnselected", data);
      },
      onTooltipRequested: function (data) {
        self.$emit("onTooltipRequested", data);
      },
      onLayoutUpdated: function (data) {
        self.$emit("onLayoutUpdated", data);
      },
    };

    ReactDOM.render(
      React.createElement(JetsSeatMap, reactProps),
      this.$refs.wrapper
    );
  },

  render: function () {
    return h("div", {
      ref: "wrapper",
    });
  },
};
</script>
