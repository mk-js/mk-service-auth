/**
 * server配置
 * 
 */

function config({ services }) {
    Object.assign(current.services, services)
    configServices(current);
    return current
}


var current = config.current = {
    host: "0.0.0.0",
    port: 8000,
    apiRootUrl: "/v1",
    services: {

    },
    configs: {
        auth: {
            key: "privateKeys",
            tokenKeys: ["userId", "orgId", "versionId"],
            exclude: ["/v1/user/login", "/v1/user/create", "/v1/user/ping"],
        },
    }
}

function configServices(server) {
    var { services, configs } = server;
    Object.keys(services).filter(k => !!services[k].config).forEach(k => {
        let curCfg = Object.assign({ server }, configs["*"], configs[k]);
        services[k].config(curCfg);
    })
}

module.exports = Object.assign(config, {
    current,
})