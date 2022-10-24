const getFlag = require("./getFlag");

function getFlagValue(flag) {
    const index = getFlag(flag) + 1;

    return process.argv[index];
}

module.exports = getFlagValue;