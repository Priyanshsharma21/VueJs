module.exports = {
    devServer: {
      proxy: {
        '/api': {
          target: 'https://wallhaven.cc',
          changeOrigin: true,
          pathRewrite: {
            '^/api': ''
          }
        }
      }
    }
  }