module.exports.inserirFavorito = function(application,req, res){
   
    var favoritoInfo = req.body;
    connection = application.config.dbConnection();
    var favoritoModel = new application.app.models.FavoritoDAO(connection);

	favoritoModel.inserirFavorito(favoritoInfo, function(error, result){
        
        if(error){
            console.log('Error in server: ' + error)
            res.status(500);
            res.json('Error in server'+ error);
        }
        
        res.status(200).json(result);
	});	
}