CREATE DATABASE IF NOT EXISTS sistema_estoque;

USE sistema_estoque;


CREATE TABLE produtos (

    id INT AUTO_INCREMENT PRIMARY KEY,

    item VARCHAR(100) NOT NULL,

    categoria VARCHAR(100) NOT NULL,

    preco DECIMAL(10,2) NOT NULL,

    quantidade_estoque INT NOT NULL DEFAULT 0

);


INSERT INTO produtos
(
    item,
    categoria,
    preco,
    quantidade_estoque
)
VALUES

(
    'Arco Dourado pequeno',
    'arcos',
    10.50,
    05
),

(
    'Bandeja  retangular branca',
    'bandeja',
    8.50,
    80
),

(
    'Apoio cilindro branco grande',
    'mesa',
    18.90,
    25
),

(
    'Apoio cilindro branco médio',
    'mesa',
    12.00,
    25
),

(
    'Apoio cilindro branco pequeno',
    'mesa',
    07.90,
    25
),

(
    'Apoio cilindro ciano pequeno',
    'mesa',
    07.90,
    25
),

  (
    'Apoio cilindro ciano médio',
    'mesa',
    12.00,
    25
),

(
    'Apoio cilindro ciano grande',
    'mesa',
    18.90,
    25
),

(
    'Suporte de bolo rosa',
    'suporte de bolo',
    2.50,
    1
),

(
    'Suporte de bolo branco',
    'suporte de bolo',
    2.50,
    8
);


-- CONSULTAR TODOS OS PRODUTOS

SELECT * FROM produtos;


-- CONSULTAR AS CATEGORIAS

SELECT DISTINCT categoria
FROM produtos
ORDER BY categoria;


-- CONSULTAR PRODUTOS POR CATEGORIA

SELECT *
FROM produtos
WHERE categoria = 'Alimentos';
