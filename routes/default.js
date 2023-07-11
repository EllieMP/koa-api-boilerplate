// const mysql_router = require('./mysql_router.js');

const defaultRouter = require('koa-router')({
    prefix: '/api/v1'
});

defaultRouter.get('/', (ctx) => {
    ctx.body = "You have successfully connected to your api!"
});

// defaultRouter.use(mysql_router.routes());

module.exports = api => {
    api.use(
        defaultRouter.routes(), 
        defaultRouter.allowedMethods()
    );
}