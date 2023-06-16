# jets-seatmap-vue-wrapper

## Installation and integration

Add as dependency to `package.json` and run `npm install'

```json
"dependencies": {
    ...
     "jets-seatmap-vue-wrapper": "github:Kwiket/jets-seatmap-vue-wrapper"
    ...
  },
```

Import and use component in `main.js` file

`FOR VUE 2.x`

```js
import Vue from 'vue';
import App from './App.vue';

// import and use, component will register itself
import JetsSeatmap from 'jets-seatmap-vue-wrapper';
Vue.use(JetsSeatmap);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
```

`FOR VUE 3.x`

```js
import { createApp } from 'vue';
import App from './App.vue';

import JetsSeatmap from 'jets-seatmap-vue-wrapper';

const app = createApp(App);

// difference in "use" between 2.x and 3.x
app.use(JetsSeatmap);

app.mount('#app');
```

Use the `JetsSeatmap` in your component

```js
<template>
  <div id="app">
    <JetsSeatmap
      :flight="flight"
      :config="config"
      @onTooltipRequested="onTooltipRequested($event)"
    ></JetsSeatmap>
  </div>
</template>
```

Change `config_mock.js`:

```
apiUrl: 'PROVIDED_API_URL',
apiAppId: 'PROVIDED_APP_ID',
apiKey: 'PROVIDED_API_KEY',

```

`replace all PROVIDED_VALUES` with your credentials.

<script>
import FLIGHT_MOCK from "./mock-data/flight_mock";
import CONFIG_MOCK from "./mock-data/config_mock";

export default {
  name: "App",

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

```

```
