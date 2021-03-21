
require("dotenv-safe").config();
const jwt = require('jsonwebtoken');
module.exports = function(application){
    
    function verifyJWT(req, res, next){
        const token = req.headers['x-access-token'];
        if (!token) return res.status(401).json({ auth: false, message: 'No token provided.' });
        
        jwt.verify(token, process.env.SECRET, function(err, decoded) {
          if (err) return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });
          
          // se tudo estiver ok, salva no request para uso posterior
          req.userId = decoded.id;
          next();
        });
    }

   application.post('/InserirLivro',verifyJWT, function(req, res){
        application.app.controllers.InserirLivro.inserirLivro(application,req,res);
   });

   application.get('/retornarLivros', function(req, res){
       application.app.controllers.RetornarLivro.retornarLivros(application,req, res);
   })

   application.get('/retornarLivro/:idLivro', function(req, res){
    application.app.controllers.RetornarLivro.retornarLivro(application,req, res);
    })

   application.put('/atualizarLivro',verifyJWT, function(req, res){
       application.app.controllers.AtualizarLivro.atualizarLivro(application, req, res);
   })

   application.delete('/deletarLivro/:idLivro',verifyJWT, function(req, res){
       application.app.controllers.DeletarLivro.deletarLivro(application, req, res);
   })
   

   
    application.post('/InserirUsuario',verifyJWT, function(req, res){
    application.app.controllers.InserirUsuario.inserirUsuario(application, req, res);
    });  

    application.post('/InserirUsuarioBasico', function(req, res){
        application.app.controllers.InserirUsuario.inserirUsuario(application, req, res);
        }); 
    
   application.get('/retornarUsuario/:idUsuario', function(req, res){
    application.app.controllers.RetornarUsuario.retornarUsuario(application, req, res);
    });
    
   application.get('/retornarUsuarios', function(req, res){
    application.app.controllers.RetornarUsuario.retornarUsuarios(application, req, res);
    });
    
   application.put('/atualizarUsuario',verifyJWT, function(req, res){
    application.app.controllers.AtualizarUsuario.atualizarUsuario(application, req, res);
    });
    
   application.delete('/deletarUsuario/:idUsuario',verifyJWT, function(req, res){
    application.app.controllers.DeletarUsuario.deletarUsuario(application, req, res);
    });

    application.post('/login', function(req, res){
        application.app.controllers.Auth.login(application,req, res);
    });


    application.post('/inserirFavorito',verifyJWT, function(req, res){
        application.app.controllers.InserirFavorito.inserirFavorito(application, req, res);
    });
    application.get('/retornarFavorito/:idUsuario', function(req, res){
        application.app.controllers.RetornarFavorito.retornarFavoritos(application, req, res);
    });
    application.get('/retornarUsuariosFavoritos/:idLivro', function(req, res){
        application.app.controllers.RetornarFavorito.retornarUsuariosFavoritos(application, req, res);
    });
    application.delete('/deletarFavorito/:idUsuario/:idLivro',verifyJWT, function(req, res){
        application.app.controllers.DeletarFavorito.deletarFavorito(application, req, res);
    });
}