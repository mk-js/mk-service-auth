const ping = (dto) => dto

module.exports = {
    //  http://localhost:8000/v1/user/helloworld 
    login: ({ userName, password }, ctx) => ctx.setToken([100, 200, 300]).return(true),
    create: (dto, ctx) => dto,
    update: (dto, ctx) => [ctx.token.userId, ctx.token.orgId, ctx.token.versionId],

}

