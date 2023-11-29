// file myWorker.js
const workerpool = require('workerpool');
const pool = workerpool.pool({
    maxQueueSize: 100,
    workerType: 'auto',
    maxWorkers: 4,
    minWorkers: 2
});


console.log(pool.stats());

function add(a, b) {
    for (let i = 0; i < 5000000; i++) {
        const j = i / 2;
    }
    return a + b;
}

setTimeout(() => {
    // offload a function to a worker
    pool
        .exec(add, [2, 4])
        .then(function (result) {
            console.log(result); // will output 6
            console.log(pool.stats());

        })
        .catch(function (err) {
            console.error(err);
        });

    pool
        .exec(add, [3, 8])
        .then(function (result) {
            console.log(result); // will output 6
            console.log(pool.stats());

        })
        .catch(function (err) {
            console.error(err);
        });


    pool
        .exec(add, [2, 8])
        .then(function (result) {
            console.log(result); // will output 6
            console.log(pool.stats());

        })
        .catch(function (err) {
            console.error(err);
        });


    pool
        .exec(add, [1, 8])
        .then(function (result) {
            console.log(result); // will output 6
            console.log(pool.stats());

        })
        .catch(function (err) {
            console.error(err);
        });

    pool
        .exec(add, [7, 8])
        .then(function (result) {
            console.log(result); // will output 6
            console.log(pool.stats());

        })
        .catch(function (err) {
            console.error(err);
        });

    pool
        .exec(add, [1, 3])
        .then(function (result) {
            console.log(result); // will output 6
            console.log(pool.stats());

        })
        .catch(function (err) {
            console.error(err);
        });
}, 10000);