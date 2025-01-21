const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: false,
  configureWebpack: {
    externals: {
      react: 'React',
      'react-dom': 'ReactDOM',
      '@seatmaps.com/react-lib': {
        commonjs: '@seatmaps.com/react-lib',
        commonjs2: '@seatmaps.com/react-lib',
        root: 'SeatmapsReactLib',
      },
    },
  },
});
