
const workerpool = require('workerpool');
const cors = require('os').cpus().length;

//? initial worker pool
const pool = workerpool.pool({
    maxQueueSize: 100,
    workerType: 'auto',
    maxWorkers: cors
});

//? the status of worker pool
console.log(pool.stats());

//? simulate networks
const networks = [
    { name: 'trc20', lastBlockNumber: 110, lastOnlineBlockNumber: 2000, offset: 100 },
    { name: 'bsc', lastBlockNumber: 500, lastOnlineBlockNumber: 3300, offset: 100 },
    { name: 'erc20', lastBlockNumber: 600, lastOnlineBlockNumber: 1800, offset: 100 },
    { name: 'ripple', lastBlockNumber: 800, lastOnlineBlockNumber: 1400, offset: 100 }
]

//? create queue for unread block numbers
const taskQueue = [];
const taskPerNetwork = 5;
for (const network of networks) {
    if (network.lastOnlineBlockNumber - network.lastBlockNumber > network.offset) {
        let index = network.lastBlockNumber + 1;
        const endOfTaskNumber = (network.offset * taskPerNetwork);
        const loopNumber = endOfTaskNumber + index > network.lastBlockNumber ?
            Math.floor((endOfTaskNumber - index) / network.offset) :
            taskPerNetwork;
        for (let i = 0; i < loopNumber; i++) {
            taskQueue.push({ name: network.name, goalBlock: network.lastOnlineBlockNumber, index, status: 'pending' });
            index += network.offset;
        }
    }
}

console.log(taskQueue);
