CREATE DATABASE ciriacoTracker;
USE ciriacoTracker;

CREATE TABLE usuario(
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nickname VARCHAR(55),
    email VARCHAR(100) NOT NULL,
    ranking VARCHAR(45),
    senha varchar(255));
    
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
    
INSERT INTO personagem VALUES
		(01,'Brimstone','Controlador'),
		(02,'Viper','Controlador'),
		(03,'Omen','Controlador'),
		(04,'Killjoy','Sentinela'),
		(05,'Cypher','Sentinela'),
		(06,'Sova','Iniciador'),
		(07,'Sage','Sentinela'),
		(09,'Phoenix','Duelista'),
		(10,'Jett','Duelista'),
		(11,'Reyna','Duelista'),
		(12,'Raze','Duelista'),
		(13,'Breach','Iniciador'),
		(14,'Skye','Iniciado'),
		(15,'Yoru','Duelista'),
		(16,'Astra','Controlador'),
		(17,'Kay/o','Iniciador'),
		(18,'Chamber','Sentinela'),
		(19,'Neon','Duelista'),
		(20,'Fade','Iniciador'),
		(21,'Harbor','Controlador'),
		(22,'Gekko','Iniciador'),
		(23,'Deadlock','Iniciador'),
		(24,'Iso','Duelista'),
		(25,'Clove','Controlador'),
		(26,'Vyse','Sentinela');

INSERT INTO partida (mapa, duracao, dataPartida) VALUES
('Ascent', 32, '2025-01-02'),
('Haven', 29, '2025-01-05'),
('Icebox', 34, '2025-01-08'),
('Lotus', 28, '2025-01-12'),
('Sunset', 31, '2025-01-15'),
('Bind', 30, '2025-01-18'),
('Split', 26, '2025-01-21'),
('Pearl', 33, '2025-01-25'),
('Fracture', 27, '2025-01-27'),
('Ascent', 35, '2025-01-29'),
('Haven', 30, '2025-02-01'),
('Lotus', 29, '2025-02-04');

INSERT INTO estatistica VALUES
(1, 1, 11, 23, 5, 14, 1, 32), 
(1, 2, 12, 18, 7, 16, 0, 24), 
(1, 3, 10, 27, 9, 12, 1, 38), 
(1, 4, 6, 14, 4, 10, 1, 22),  
(1, 5, 9, 21, 8, 14, 1, 30),  
(1, 6, 7, 12, 3, 18, 0, 19),  
(1, 7, 15, 16, 4, 11, 1, 26), 
(1, 8, 22, 19, 6, 15, 0, 25), 
(1, 9, 18, 25, 7, 13, 1, 34), 
(1, 10, 11, 31, 5, 17, 1, 40),
(1, 11, 12, 17, 8, 16, 0, 21),
(1, 12, 20, 28, 10, 12, 1, 37); 

SELECT p.dataPartida, e.abates
        FROM estatistica e
        JOIN partida p ON e.fkPartida = p.idPartida
        WHERE e.fkUsuario = ${idUsuario}
        ORDER BY p.dataPartida;
