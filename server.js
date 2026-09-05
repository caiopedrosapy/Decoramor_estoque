const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());


// ================================
// CONEXÃO COM MYSQL
// ================================

const db = mysql.createConnection({

    host: "localhost",

    user: "root",

    password: "",

    database: "sistema_estoque"

});


// ================================
// TESTAR CONEXÃO
// ================================

db.connect((erro) => {

    if (erro) {

        console.error(
            "Erro ao conectar ao MySQL:",
            erro.message
        );

        return;

    }

    console.log(
        "MySQL conectado com sucesso!"
    );

});


// ================================
// BUSCAR TODOS OS PRODUTOS
// ================================

app.get("/produtos", (req, res) => {

    const sql = `
        SELECT
            id,
            item,
            categoria,
            preco,
            quantidade_estoque
        FROM produtos
        ORDER BY id
    `;


    db.query(sql, (erro, resultados) => {

        if (erro) {

            console.error(erro);

            return res.status(500).json({
                erro: "Erro ao buscar produtos."
            });

        }


        res.json(resultados);

    });

});


// ================================
// BUSCAR PRODUTO
// ================================

app.get("/produtos/:id", (req, res) => {

    const id = req.params.id;


    const sql = `
        SELECT
            id,
            item,
            categoria,
            preco,
            quantidade_estoque
        FROM produtos
        WHERE id = ?
    `;


    db.query(
        sql,
        [id],
        (erro, resultados) => {

            if (erro) {

                return res.status(500).json({
                    erro: "Erro ao buscar produto."
                });

            }


            if (resultados.length === 0) {

                return res.status(404).json({
                    erro: "Produto não encontrado."
                });

            }


            res.json(resultados[0]);

        }
    );

});


// ================================
// BUSCAR CATEGORIAS
// ================================

app.get("/categorias", (req, res) => {

    const sql = `
        SELECT DISTINCT categoria
        FROM produtos
        ORDER BY categoria
    `;


    db.query(
        sql,
        (erro, resultados) => {

            if (erro) {

                return res.status(500).json({
                    erro: "Erro ao buscar categorias."
                });

            }


            res.json(resultados);

        }
    );

});


// ================================
// BUSCAR PRODUTOS POR CATEGORIA
// ================================

app.get(
    "/categorias/:categoria",
    (req, res) => {

        const categoria =
            req.params.categoria;


        const sql = `
            SELECT
                id,
                item,
                categoria,
                preco,
                quantidade_estoque
            FROM produtos
            WHERE categoria = ?
            ORDER BY id
        `;


        db.query(
            sql,
            [categoria],
            (erro, resultados) => {

                if (erro) {

                    return res.status(500).json({
                        erro:
                            "Erro ao buscar produtos."
                    });

                }


                res.json(resultados);

            }
        );

    }
);


// ================================
// INICIAR SERVIDOR
// ================================

const PORT = 3000;

app.listen(PORT, () => {

    console.log(
        `Servidor rodando em http://localhost:${PORT}`
    );

});
