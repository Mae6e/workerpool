

const test = require('./utils/index');

search = (from, to) => {
    try {
        // test.getData();
        for (let i = from; i < to; i++) {
            const result = i * to;
        }
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}

module.exports = search;
