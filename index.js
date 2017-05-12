const express = require('express');
const history = require('connect-history-api-fallback');
const app = express();

const staticFileMiddleware = express.static('assets');
app.use(staticFileMiddleware);
app.use(history({
  rewrites: [
    { from: /\/order/, to: '/views/order.html' },
    { from: /\/detail$/, to: '/views/orderDetail.html' },
    { from: /\/supply$/, to: '/views/supply.html' },
    { from: /\/need$/, to: '/views/need.html' }
  ]
}));
app.use(staticFileMiddleware);

const port = 5555;
app.listen(port, () => {
  console.log(`Example app listening on port ${5555}!`);
});
