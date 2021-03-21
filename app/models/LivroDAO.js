
function LivroDAO(connection){
    this._connection = connection;
}

LivroDAO.prototype.inserirLivro = async function(livro, callback){

    await this._connection.query('insert into livro set ?', livro, callback);
}

LivroDAO.prototype.retornarLivros = async function(callback){

    await this._connection.query("select * from livro", callback);
}

LivroDAO.prototype.retornarLivro = async function(idLivro,callback){

    await this._connection.query("select * from livro where idLivro=?",idLivro,callback);
}

LivroDAO.prototype.atualizarLivro = async function(livro, callback){

    await this._connection.query("update livro set ? where idLivro=?",[livro,livro.idLivro], callback);

}

LivroDAO.prototype.deletarLivro = async function(livro, callback){

    await this._connection.query("delete from favoritos where idLivro=?;delete from livro where idLivro=?",[livro.idLivro, livro.idLivro], callback);

}

module.exports = function(){
    return LivroDAO;
}