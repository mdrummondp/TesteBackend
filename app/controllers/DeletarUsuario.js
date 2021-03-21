module.exports.deletarUsuario = function(application,req, res){
   
    var id = req.params;
    connection = application.config.dbConnection();
    var usuarioModel = new application.app.models.UsuarioDAO(connection);
       
       
   
    usuarioModel.deletarUsuario(id,function(error, result){
           
           if(error){
               res.status(500);
               res.send('Error in server'+ error);
           }
           
               res.status(200).json(result);
       });	
   }