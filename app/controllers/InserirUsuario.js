module.exports.inserirUsuario = function(application,req, res){
   
    var usuarioInfo = req.body;
    
    connection = application.config.dbConnection();
    var usuarioModel = new application.app.models.UsuarioDAO(connection);

	usuarioModel.inserirUsuario(usuarioInfo, function(error, result){
        
        if(error){
            console.log('Error in server: ' + error)
            res.status(500);
            res.json('Error in server'+ error);
        }
        
        res.status(200).json(result);
	});	
}