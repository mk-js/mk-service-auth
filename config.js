
function config(options) {
    Object.assign(current, options)
    current.apiRootUrl = options.server.apiRootUrl;
    current.secret = new Buffer(options.key, "base64");
    current.excludeUrls = {};
    current.exclude.forEach(i => current.excludeUrls[current.apiRootUrl + i] = true)
    if(current.init)current.init();
    return current;
}

var current = {
    apiRootUrl: "",
    key: "token/key",
    tokenKeys: null,
    exclude: [],
    secret: null,
    expire: 5 * 24 * 60 * 60, //5 days, seconds
}

module.exports = Object.assign(config, {
    current,
})
