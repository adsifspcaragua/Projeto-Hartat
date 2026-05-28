DROP TABLE IF EXISTS HelloWorld;
CREATE TABLE HelloWorld(
    id INTEGER PRIMARY KEY,
    hello BOOLEAN DEFAULT true
);

INSERT INTO HelloWorld (hello) VALUES (true)