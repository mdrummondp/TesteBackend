Create table if not exists Livro(idLivro int primary key auto_increment, titulo varchar(200), isbn varchar(100), categoria varchar(100), ano varchar(4));
Create table if not exists Usuario(idUsuario int primary key auto_increment, nome varchar(200),telefone varchar(15), idade int, email varchar(200) UNIQUE, senha varchar(100) not null);
Create table if not exists favoritos(idLivro int,idUsuario int, primary key (idLivro, idUsuario), foreign key (idLivro) references Livro(idLivro) on delete cascade, foreign key (idUsuario) references usuario(idUsuario) on delete cascade);
