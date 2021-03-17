const path = require('path');
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// static directory 경로 지정
app.use('/', express.static(`${__dirname}/build/dist`));
// images path rotate
app.use('/images', express.static(`${__dirname}/build/images/`));

// URL과 API Server 주소 매핑
app.use(
  createProxyMiddleware('/PD', {
    target: 'http://221.139.14.153:9071/master/api/v1/pd',
    changeOrigin: true,
    pathRewrite: {
      '/PD/': '/',
    },
  }),
  createProxyMiddleware('/CM', {
    target: 'http://221.139.14.153:9071/master/api/v1/cm',
    changeOrigin: true,
    pathRewrite: {
      '/CM/': '/',
    },
  })
);

// React Router 사용 시
app.get('/*', function (req, res) {
  res.sendFile(path.resolve(__dirname, 'build/dist', 'index.html'));
});

console.log(`NODE_ENV : ${process.env.NODE_ENV}`);
const { HOSTNAME } = process.env;
const PORT = 9070;

console.log(`HOSTNAME : ${HOSTNAME}`);
console.log(`PORT : ${PORT}`);

// Domain이 있는 Server의 경우 NODE_ENV를 production으로 SET하고 Web Server를 해당 Server의 HOSTNAME으로 띄운다.
if (!process.env.NODE_ENV || !HOSTNAME) {
  app.listen(PORT);
} else if (process.env.NODE_ENV === 'production') {
  app.listen(PORT, HOSTNAME);
} else {
  app.listen(PORT);
}
