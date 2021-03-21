const crypto = require('crypto')

function UsuarioDAO(connection){
    this._connection = connection;
}

UsuarioDAO.prototype.inserirUsuario = async function(usuario, callback){
    const md5sum = crypto.createHash('md5');
    const res = md5sum.update(usuario.senha).digest('hex');
    usuario.senha = res;
    await this._connection.query('insert into usuario set ?', usuario, callback);
}

UsuarioDAO.prototype.retornarUsuarios = async function(callback){

    await this._connection.query("select idUsuario,nome,idade,telefone,email from usuario", callback);
}

UsuarioDAO.prototype.retornarUsuario = async function(idUsuario,callback){

    await this._connection.query("select * from usuario where idUsuario=?",idUsuario, callback);
}

UsuarioDAO.prototype.atualizarUsuario = async function(usuario, callback){
    const md5sum = crypto.createHash('md5');
    const res = md5sum.update(usuario.senha).digest('hex');
    usuario.senha = res;
    await this._connection.query("update usuario set ? where idUsuario=?",[usuario,usuario.idUsuario], callback);

}

UsuarioDAO.prototype.deletarUsuario = async function(usuario, callback){

    await this._connection.query("delete from favoritos where idUsuario=?;delete from usuario where idUsuario=?",[usuario.idUsuario, usuario.idUsuario], callback);

}

module.exports = function(){
    return UsuarioDAO;
}