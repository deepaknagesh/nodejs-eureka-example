const express = require('express');
const { register, unregister } = require("register-node-with-eureka");

const listenPort = process.env.PORT || 3000;
const eurekaService = `http://localhost:8000/eureka`;

const app = express();
let listener;

app.get('/*', (req, res) => {
    // console.log(listener.address().port);
    return res.send(`Hello World from ${listener.address().port}!`);
})
// console.log(`Example app listening on port ${port[i]}!`);

// require('./src/registerWithEureka').registerWithEureka(eurekaService, 'service-1', listenPort);
// require('./src/registerWithEureka').registerWithEureka();
// register(eurekaService, 'service-1', listenPort);
register(eurekaService, 'service-1', listenPort { interval: 30 * 1000 });
listener = app.listen(listenPort, () => console.log(`Example app listening on port ${listenPort}!`))

process.on('SIGINT', function () {
    unregister(function (error, response) {
        process.exit();
    });
});
