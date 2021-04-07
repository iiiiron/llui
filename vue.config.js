const path = require('path')

module.exports = {
  lintOnSave: false,
  chainWebpack: config => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('less').oneOf(type)))
  },
pages: {
    index: {
      // 修改项目入口文件
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  // 扩展webpack配置，使packages加入编译
  // 高版本js语法转为低版本
  // chainWebpack: config => {
  //   config.module
  //     .rule('js')
  //     .include.add(path.resolve(__dirname, 'packages'))
  //     .end()
  //     .use('babel')
  //     .loader('babel-loader')
  //     .tap(options => {
  //       return options
  //     })
  // },
  css: {
    loaderOptions: {

      scss: {
        prependData: '@import "@/assets/scss/variables.scss";'
      },
    },
  },
}
function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/css/base.less'),
      ],
    })
}
