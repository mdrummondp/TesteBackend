module.exports.inserirLivro = function(application,req, res){
   
    var livroInfo = req.body;
    connection = application.config.dbConnection();
    var livroModel = new application.app.models.LivroDAO(connection);

	livroModel.inserirLivro(livroInfo, function(error, result){
        
        if(error){
            console.log('Error in server: ' + error)
            res.status(500);
            res.json('Error in server'+ error);
        }
        
        res.status(200).json(result);
	});	
}