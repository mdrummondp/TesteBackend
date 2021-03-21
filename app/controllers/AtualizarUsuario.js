module.exports.atualizarUsuario = function(application,req, res){
   
    var usuario = req.body;
    connection = application.config.dbConnection();
    var usuarioModel = new application.app.models.UsuarioDAO(connection);

    usuarioModel.atualizarUsuario(usuario,function(error, result){
           
           if(error){
               console.log('Error in server: ' + error)
               res.status(500);
               res.send('Error in server'+ error);
           }
           
               res.status(200).json(result);
       });	
   }