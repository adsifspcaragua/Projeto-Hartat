DROP TABLE IF EXISTS HelloWorld;
CREATE TABLE HelloWorld(
    id              INTEGER     PRIMARY KEY,
    hello           BOOLEAN     DEFAULT true
);

DROP TABLE IF EXISTS imagens;
CREATE TABLE imagens(
    id              INTEGER     PRIMARY KEY,
    nome            TEXT        NOT NULL,
    extensao        TEXT        NOT NULL,
    uuid            TEXT        NOT NULL,
    data_envio      DATETIME    NOT NULL DEFAULT CURRENT_TIMESTAMP
);

DROP TABLE IF EXISTS tipos_postagens;
CREATE TABLE tipos_postagens(
    id              INTEGER     PRIMARY KEY,
    nome            TEXT        NOT NULL UNIQUE
);

DROP TABLE IF EXISTS postagens;
CREATE TABLE postagens(
    id              INTEGER     PRIMARY KEY,
    titulo          TEXT        NOT NULL,
    html            TEXT        NOT NULL,
    data_postagem   DATETIME    NOT NULL DEFAULT CURRENT_TIMESTAMP,
    pais            

    capa_id         INTEGER,
    tipo_id         INTEGER,

    CONSTRAINT FK_POSTAGEM_CAPA
        FOREIGN KEY(capa_id)
        REFERENCES imagens(id)
        ON DELETE SET NULL,
    
    CONSTRAINT FK_POSTAGEM_TIPO
        FOREIGN KEY(tipo_id)
        REFERENCES tipos_postagens(id)
);

DROP TABLE IF EXISTS etnias;
CREATE TABLE etnias(
    id              INTEGER     PRIMARY KEY,
    nome            TEXT        NOT NULL,
    descricao       TEXT        NOT NULL,
    url             TEXT        NOT NULL,

    capa_id         INTEGER,

    CONSTRAINT FK_ETNIA_CAPA
        FOREIGN KEY(capa_id)
        REFERENCES imagens(id)
        ON DELETE SET NULL
);

DROP TABLE IF EXISTS obras;
CREATE TABLE obras(
    id              INTEGER     PRIMARY KEY,
    nome            TEXT        NOT NULL,
    descricao       TEXT        NOT NULL,

    capa_id         INTEGER,
    etnia_id        INTEGER,

    CONSTRAINT FK_OBRA_CAPA
        FOREIGN KEY(capa_id)
        REFERENCES imagens(id)
        ON DELETE SET NULL

    CONSTRAINT FK_OBRA_ETNIA
        FOREIGN KEY(etnia_id)
        REFERENCES etnias(id)
        ON DELETE SET NULL
);

DROP TABLE IF EXISTS obras_imagens;
CREATE TABLE obras_imagens(
    obra_id         INTEGER     NOT NULL,
    imagem_id       INTEGER     NOT NULL,

    CONSTRAINT FK_OBRAS_IMAGENS_OBRA
        FOREIGN KEY(obra_id)
        REFERENCES obras(id)
        ON DELETE CASCADE,

    CONSTRAINT FK_OBRAS_IMAGENS_IMAGEM
        FOREIGN KEY(imagem_id)
        REFERENCES imagens(id)
        ON DELETE CASCADE
    
    PRIMARY KEY (obra_id, imagem_id)
);

DROP TABLE IF EXISTS filmes;
CREATE TABLE filmes(
    id              INTEGER     PRIMARY KEY,
    titulo          TEXT        NOT NULL,
    descricao       TEXT        NOT NULL,
    genero          TEXT        NOT NULL,
    classificacao   TEXT        NOT NULL,
    data_exibicao   DATETIME    NOT NULL,

    banner_id       INTEGER,
    capa_id         INTEGER,

    CONSTRAINT FK_FILME_BANNER
        FOREIGN KEY(banner_id)
        REFERENCES imagens(id)
        ON DELETE SET NULL

    CONSTRAINT FK_FILME_CAPA
        FOREIGN KEY(capa_id)
        REFERENCES imagens(id)
        ON DELETE SET NULL
);

DROP TABLE IF EXISTS eventos;
CREATE TABLE eventos(
    
);