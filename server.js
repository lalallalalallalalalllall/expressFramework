var cluster = require('cluster');


if (cluster.isMaster) {
    var cpuCount = require('physical-cpu-count')
    console.log(cpuCount)
    for (var i = 0; i < cpuCount; i += 1) {
        cluster.fork();
    }
} else {
    const express = require('express')
    const app = express()
    const logger = require('@common/logger')
    var queue = require('express-queue');
    let port = process.env.SERVER_PORT || 3333

    app.use(queue({ activeLimit: 1, queuedLimit: -1 }));

    app.use(require('@middleware'));

    app.use(require('@router'))

    app.listen(port, () => {
        console.log('Server is started on ' + port +' with pid '+ process.pid)
        logger.info('Server is started on ' + port +' with pid '+ process.pid)
    })
}

cluster.on('exit', function(service) {
    console.log('Cluster %d died :(', service.id);
    //restart cluster
    cluster.fork();

});
