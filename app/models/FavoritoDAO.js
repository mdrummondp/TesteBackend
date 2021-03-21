
function FavoritoDAO(connection){
    this._connection = connection;
}

FavoritoDAO.prototype.inserirFavorito = async function(favorito, callback){

    await this._connection.query('insert into favoritos set ?', favorito, callback);
}

FavoritoDAO.prototype.retornarFavoritos = async function(idUsuario,callback){
    
    await this._connection.query('select * from livro inner join (select * from favoritos where idUsuario=?) ids on ids.idLivro = livro.idLivro ',idUsuario,callback);
}

FavoritoDAO.prototype.retornarUsuariosFavoritos = async function(idLivro,callback){

    console.log(await this._connection.query('select * from favoritos where idLivro=?',idLivro, callback));
}

FavoritoDAO.prototype.deletarFavorito = async function(info,callback){

  await this._connection.query('delete from favoritos where idLivro=? and idUsuario=?',[info.idLivro,info.idUsuario], callback);
}


module.exports = function(){
    return FavoritoDAO;
}