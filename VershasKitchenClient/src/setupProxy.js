const  {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://vershas-kitchen-services.herokuapp.com',
      changeOrigin: true,
      pathRewrite: {
        "^/api": "/"
      }
    })
  );
};