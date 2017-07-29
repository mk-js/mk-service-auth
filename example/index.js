const { config, start } = require("mk-server")
const serverConfig = require("./config")

const auth = require("./services/auth/index.js")

const user = require("./services/user/index.js")


const services = {
    auth,
    user,
}

config(serverConfig({ services }))

start()