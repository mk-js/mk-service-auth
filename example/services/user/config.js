
function config(options) {
    Object.assign(current, options)
    return current;
}

var current = {
}

module.exports = Object.assign(config, {
    current,
})
