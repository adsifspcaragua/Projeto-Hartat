DROP TABLE IF EXISTS HelloWorld;
CREATE TABLE HelloWorld(
    id INTEGER PRIMARY KEY,
    hello BOOLEAN DEFAULT true
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
)

DROP TABLE IF EXISTS postagens;
CREATE TABLE postagens(
    id INTEGER PRIMARY KEY,
    titulo TEXT NOT NULL,
    html TEXT NOT NULL,
    data_postagem DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,

    capa_id INTEGER,
    tipo_id INTEGER,

    CONSTRAINT FK_POSTAGEM_CAPA
        FOREIGN KEY(capa_id)
        REFERENCES imagens(id)
        ON DELETE SET NULL,
    
    CONSTRAINT FK_POSTAGEM_TIPO
        FOREIGN KEY(tipo_id)
        REFERENCES tipos_postagens(id)
);