const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: false,
  configureWebpack: {
    externals: ["jets_seatmap_react_lib", 'react', 'react-dom']
  }
})
