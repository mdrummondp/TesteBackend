module.exports.retornarFavoritos = function(application,req, res){
    var idUsuario = req.params.idUsuario;
    connection = application.config.dbConnection();
    var favoritoModel = new application.app.models.FavoritoDAO(connection);
    
	favoritoModel.retornarFavoritos(idUsuario,function(error, result){
        
        if(error){
            console.log("Error: "+error);
            res.status(500);
            res.send('Error in server'+ error);
        }
        res.status(200).json(result);
	});	
}

module.exports.retornarUsuariosFavoritos = function(application,req, res){
    var idLivro = req.params.idLivro;
    connection = application.config.dbConnection();
    var favoritoModel = new application.app.models.FavoritoDAO(connection);
    favoritoModel.retornarUsuariosFavoritos(idLivro,function(error, result){
        
        if(error){
            console.log("Error: "+error);
            res.status(500).send('Error in server'+ error);
        }
        res.status(200).json(result);
	});	
}