CREATE DATABASE ciriacoTracker;
USE ciriacoTracker;

CREATE TABLE usuario(
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nickname VARCHAR(55),
    email VARCHAR(100) NOT NULL,
    ranking VARCHAR(45));
    
CREATE TABLE partida(
	idPartida INT PRIMARY KEY AUTO_INCREMENT,
    mapa VARCHAR(255),
    duracao INT,
    dataPartida DATE);
    
CREATE TABLE personagem(
	idPersonagem INT PRIMARY KEY,
    nomePersonagem VARCHAR(55),
    funcao VARCHAR(55));
    
CREATE TABLE estatistica(
	fkUsuario INT,
    fkPartida INT,
    fkPersonagem INT,
    abates INT,
    assistencia INT,
    mortes INT,
    vitoria INT,
    pontos INT,
    PRIMARY KEY(fkUsuario, fkPartida, fkPersonagem),
    FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario),
    FOREIGN KEY (fkPartida) REFERENCES partida(idPartida),
    FOREIGN KEY (fkPersonagem) REFERENCES personagem(idPersonagem)
    );
    
