
const crypto = require('crypto')


function UsuarioDAO(connection){
    this._connection = connection;
}

UsuarioDAO.prototype.login = async function(usuario, callback){
    const md5sum = crypto.createHash('md5');
    const res = md5sum.update(usuario.senha).digest('hex');
    usuario.senha = res;
    await this._connection.query('select idUsuario, nome,idade,email,telefone from usuario where email=? and senha=?', [usuario.email,usuario.senha], callback);
}


module.exports = function(){
    return UsuarioDAO;
}