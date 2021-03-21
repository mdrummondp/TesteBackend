module.exports.retornarUsuarios = function(application,req, res){
   
    connection = application.config.dbConnection();
    var usuarioModel = new application.app.models.UsuarioDAO(connection);
    
    

	usuarioModel.retornarUsuarios(function(error, result){
        
        if(error){
            res.status(500);
            res.send('Error in server'+ error);
        }
        
        res.status(200).json(result);
	});	
}



module.exports.retornarUsuario = function(application, req ,res){

    var idUsuario = req.params.idUsuario;
    connection = application.config.dbConnection();
    var usuarioModel = new application.app.models.UsuarioDAO(connection);

    usuarioModel.retornarUsuario(idUsuario,function(error, result){

        if(error){
            res.status(500);
            res.send('Error in server '+ error);
        }

        res.status(200).send(result);

    });
}




