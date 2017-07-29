const { config, start } = require("mk-server")
const serverConfig = require( "./config")

const mk_service_auth = require("./services/auth/index.js")

const user = require("./services/user/index.js")


const services = {
	
    [mk_service_auth.name]: mk_service_auth,
	
    [user.name]: user,

}


config(serverConfig({services}))

start()