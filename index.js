const config = require('./config')
const api = require('./api')

config.current.init = () => api.init()
module.exports = {
    apiRootUrl: false,
    name: "mk-service-auth",
    version: "",
    description: "",
    author: "lsg",
    config,
    api,
}