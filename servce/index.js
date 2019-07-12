
const Koa = require('koa');
const mysqlMethods=require('./mysql')

const app = new Koa();

mysqlMethods.login().then(data=>{
    console.log(data[0].account);
});
app.use(async ctx => {
    ctx.body = 'Hello World';
});

app.listen(8080);