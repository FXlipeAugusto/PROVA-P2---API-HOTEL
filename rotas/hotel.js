/*
CREATE DATABASE IF NOT EXISTS hotel;

USE hotel;

CREATE TABLE IF NOT EXISTS hospedes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    documento VARCHAR(50) NOT NULL,
    telefone VARCHAR(20)
);

SELECT * FROM hospedes;

*/


const express = require('express');
const router = express.Router();
// Importar a conexão criada no mysql.js
const mysql = require('../mysql').pool;

/*
    Listas de URL
    http://localhost:3000/api.hotel/hotel/listar
    http://localhost:3000/api.hotel/hotel/getId?id=1
    http://localhost:3000/api.hotel/hotel/cadastrar
        {
            "nome": "João Silva",
            "documento": "123456789",
            "telefone": "912345678"
        }
    http://localhost:3000/api.hotel/hotel/atualizar?id=1
    http://localhost:3000/api.hotel/hotel/excluir?id=1

*/

// Listar todos os hospedes da base de dados
router.get('/listar', (req, res, next) => {
    mysql.query('SELECT * FROM hospedes;', (error, result, fields) => {
        if (error) { return res.status(500).send({ error: error }); }
        return res.status(200).send({
            mensagem: 'hospedes encontrados com sucesso.',
            quantidade: result.length,
            hospedes: result
        });
    });
});

// Consultar um hospede pelo ID
router.get('/getId', (req, res, next) => {
    mysql.query(
        'SELECT * FROM hospedes WHERE id = ?;',
        [req.query.id],
        (error, result, fields) => {
            if (error) { return res.status(500).send({ error: error }); }
            if (result.length === 0) {
                return res.status(404).send({ mensagem: 'hospede não encontrado.' });
            }
            return res.status(200).send({
                mensagem: 'hospede encontrado com sucesso.',
                hospedes: result[0]
            });
        }
    );
});

// Cadastrar um novo hospede
router.post('/cadastrar', (req, res, next) => {
    const { nome, documento, telefone } = req.body;
    mysql.query(
        'INSERT INTO hospedes (nome, documento, telefone) VALUES (?, ?, ?);',
        [nome, documento, telefone],
        (error, result, fields) => {
            if (error) { return res.status(500).send({ error: error }); }
            return res.status(201).send({
                mensagem: 'hospede cadastrado com sucesso.',
                id_hospede: result.insertId,
                hospedes: { nome, documento, telefone }
            });
        }
    );
});

// Atualizar os dados de um hospede
router.put('/atualizar', (req, res, next) => {
    const id = req.query.id;
    const { nome, documento, telefone } = req.body;

    mysql.query(
        'UPDATE hospedes SET nome = ?, documento = ?, telefone = ? WHERE id = ?;',
        [nome, documento, telefone, id],
        (error, result, fields) => {
            if (error) {
                return res.status(500).send({ error: error });
            }

            if (result.affectedRows === 0) {
                return res.status(404).send({
                    mensagem: 'Hospede não encontrado.'
                });
            }

            return res.status(200).send({
                mensagem: 'Hospede atualizado com sucesso.',
                id_hospede: id,
                hospede: { nome, documento, telefone }
            });
        }
    );
});

// Excluir um hospede
router.delete('/excluir', (req, res, next) => {
    mysql.query(
        'DELETE FROM hospedes WHERE id = ?;',
        [req.query.id],
        (error, result, fields) => {
            if (error) { return res.status(500).send({ error: error }); }
            return res.status(200).send({
                mensagem: 'Hospede excluído com sucesso.'
            });
        }
    );
});

module.exports = router;
