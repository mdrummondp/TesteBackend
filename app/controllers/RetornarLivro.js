module.exports.retornarLivros = function(application,req, res){
   
    connection = application.config.dbConnection();
    var livroModel = new application.app.models.LivroDAO(connection);
    
    

	livroModel.retornarLivros(function(error, result){
        
        if(error){
            console.log("Error: "+error);
            res.status(500);
            res.send('Error in server'+ error);
        }
        
        res.status(200).json(result);
	});	
}


module.exports.retornarLivro = function(application, req ,res){

    
    var idLivro = req.params.idLivro;
    connection = application.config.dbConnection();
    var livroModel = new application.app.models.LivroDAO(connection);

    livroModel.retornarLivro(idLivro,function(error, result){

        if(error){
            console.log('Error: '+error);
            res.status(500);
            res.send('Error in server '+ error);
        }

        res.status(200).send(result);

    });
}



