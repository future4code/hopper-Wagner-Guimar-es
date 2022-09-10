CREATE TABLE Funcionarios_Empresa (
    id INT PRIMARY KEY,
    nome VARCHAR(255)  NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE
);

INSERT INTO Funcionarios_Empresa (id,nome,email)
VALUES (003, "Laura", "lau@lbn.com");

SELECT * FROM `Funcionarios_Empresa`;

SELECT id AS IDENTIFIER FROM `Funcionarios_Empresa`;

SELECT id, nome FROM `Funcionarios_Empresa`
WHERE nome ="Laura";

SELECT * FROM `Funcionarios_Empresa`
WHERE  (nome LIKE "%a%");

SELECT * FROM `Funcionarios_Empresa`
WHERE (nome NOT LIKE "%r%") AND (nome LIKE "%u%");

INSERT INTO `Funcionarios_Empresa` (id,nome,email)
VALUES (004, "Yuzo", "yuzo@lbn.com");
