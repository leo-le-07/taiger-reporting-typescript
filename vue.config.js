module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/styles/_variables.scss";
          @import "@/styles/_global.scss";
        `
      }
    }
  },
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg')

    svgRule.uses.clear()

    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
  }
}
