module.exports.deletarFavorito = function(application,req, res){
   
    var info = req.params;
    connection = application.config.dbConnection();
    var favoritoModel = new application.app.models.FavoritoDAO(connection);
   
    favoritoModel.deletarFavorito(info,function(error, result){
           
           if(error){
               console.log("Error: "+error);
               res.status(500);
               res.send('Error in server'+ error);
           }
           
               res.status(200).json(result);
       });	
   }