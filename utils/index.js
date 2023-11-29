
const axios = require('axios');

getData = (ms) => {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}
module.exports = getData;