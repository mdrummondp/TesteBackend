module.exports.deletarLivro = function(application,req, res){
   
    var id = req.params;
    connection = application.config.dbConnection();
    var livroModel = new application.app.models.LivroDAO(connection);
       
    livroModel.deletarLivro(id,function(error, result){
           
           if(error){
               res.status(500);
               res.send('Error in server'+ error);
           }
           
               res.status(200).json(result);
       });	
   }