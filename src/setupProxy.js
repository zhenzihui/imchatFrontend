const proxy = require('http-proxy-middleware');
const server = "localhost";
const port = 8080
module.exports = function(app) {
    app.use(proxy.createProxyMiddleware('/api', { target: `http://${server}:${port}` }));
};