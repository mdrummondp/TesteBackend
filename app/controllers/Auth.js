
require("dotenv-safe").config();
const jwt = require('jsonwebtoken');

module.exports.login = function(application,req, res){
   
    var loginInfo = req.body;
    connection = application.config.dbConnection();
    var AuthModel = new application.app.models.AuthDAO(connection);
    const email = loginInfo.email;
    const token = jwt.sign({email}, process.env.SECRET,{
        expiresIn:1000
    });

	AuthModel.login(loginInfo, function(error, result){
        
        if(error){
            console.log('Error in server: ' + error)
            res.status(500);
            res.json('Error in server'+ error);
        }
        if(result[0] != undefined){
        result[0].tokenBack = token;
        }
        res.status(200).json(result);
	    });	
    }
