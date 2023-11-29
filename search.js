
const workerpool = require('workerpool');
const getData = require('./utils');

async function search(from, to) {
    try {
        const response = await getData(10);
        for (let i = from; i < to; i++) {
            const result = i * to;
        }
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}

//? create a worker and register public functions
workerpool.worker({
    getData: getData,
    search: search
});

