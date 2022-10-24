function getFlag(flag) {
    return process.argv.indexOf(flag);
}

module.exports = getFlag;