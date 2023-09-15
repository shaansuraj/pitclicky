const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  // Proxy Clicky API requests to avoid CORS issues
  app.use(
    '/api/clicky', // Adjust the proxy route as needed
    createProxyMiddleware({
      target: 'https://api.clicky.com', // Clicky API base URL
      changeOrigin: true,
    })
  );
};
