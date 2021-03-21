var mysql = require('mysql');

var host = 'localhost';
var user = 'root';
var password = 'Meraki@2021';
var database = 'biblioteca';

var connMySQL = function(){
    //console.log('Conectado com o MySQL.');
    return mysql.createConnection({
        multipleStatements: true,
        host: host,
        user: user,
        password:password,
        database: database
    });
}

module.exports = function(){
    return connMySQL;
}