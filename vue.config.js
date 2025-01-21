const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: false,
  configureWebpack: {
    externals: {
      react: {
        commonjs: 'react',
        commonjs2: 'react',
        root: 'React',
      },
      'react-dom': {
        commonjs: 'react-dom',
        commonjs2: 'react-dom',
        root: 'ReactDOM',
      },
      '@seatmaps.com/react-lib': {
        commonjs: '@seatmaps.com/react-lib',
        commonjs2: '@seatmaps.com/react-lib',
        root: 'SeatmapsReactLib',
      },
    },
  },
});
