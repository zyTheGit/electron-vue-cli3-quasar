const mysql = require('mysql')
const config = require('./default')

let pool = mysql.createPool({
    host     : config.database.HOST,
    user     : config.database.USERNAME,
    password : config.database.PASSWORD,
    database : config.database.DATABASE
});
let query = function( sql, values ) {

    return new Promise(( resolve, reject ) => {
        pool.getConnection(function(err, connection) {
            if (err) {
                resolve( err )
            } else {
                connection.query(sql, values, ( err, rows) => {

                    if ( err ) {
                        reject( err )
                    } else {
                        var string=JSON.stringify(rows); 
                        var data = JSON.parse(string)
                        resolve( data )
                    }
                    connection.release()
                })
            }
        })
    })

}

// 查询hez数据库
let login = function () {
    let _sql = `
        SELECT * FROM login
    `
    return query(_sql)
}

module.exports={    //暴露方法
    login
}