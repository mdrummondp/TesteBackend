module.exports.atualizarLivro = function(application,req, res){
   
    var livro = req.body;
    connection = application.config.dbConnection();
    var livroModel = new application.app.models.LivroDAO(connection);
          
    livroModel.atualizarLivro(livro,function(error, result){
           
           if(error){
               console.log('Error in server: ' + error)
               res.status(500);
               res.send('Error in server'+ error);
           }
           
               res.status(200).json(result);
       });	
   }