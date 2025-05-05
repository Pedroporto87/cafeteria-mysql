const pool = require('../models/cafeteria');

// Função para criar um novo pedido
exports.postPedidos = (req, res) => {
    const { cliente, item, quantidade, observacoes, status } = req.body;

    const query = 'INSERT INTO pedidos (cliente, item, quantidade, observacoes, status) VALUES (?, ?, ?, ?, ?)';

    pool.query(query, [cliente, item, quantidade, observacoes, status], (error, results) => {
        if (error) {
            console.error('Erro ao criar pedido:', error);
            return res.status(500).json({ error: 'Erro ao criar pedido' });
        }

        res.status(201).json({ message: 'Pedido criado com sucesso', pedidoId: results.insertId });
    });
};
    //Função para listar todos os pedidos
exports.getPedidos = (req, res) => {
    const query = 'SELECT * FROM pedidos';
    pool.query(query, (error, results) => {
        if(error) {
            console.error('Erro ao encontrar os pedidos:', error);
            return res.status(500).json({ error: 'Erro ao carregar os pedidos', details: error });
        }
        res.status(200).json(results);
    })
}

//Função para buscar um pedido específico
exports.getByIdPedidos = (req, res) => {
    const pedidoId = req.params.id;

    const query = 'SELECT * FROM pedidos WHERE id = ?'

    pool.query(query, [pedidoId], (error, results) => {
        if(error) {
            console.error('Erro ao encontrar o pedido:', error);
            return res.status(500).json({ error: 'Erro ao carregar o pedido', details: error });
        }

        if(results.length === 0) {
            return res.status(404).json({ message: 'Pedido não encontrado' });
        }

        res.status(200).json(results[0]);
    })
}

//Função para atualizar um pedido
exports.updatePedidos = (req, res) => {
    const pedidoId = req.params.id;
    const {item, status } = req.body;

    const query = 'UPDATE pedidos SET item = ?, status = ? WHERE id = ?';

    pool.query(query, [item, status, pedidoId], (error, results) => {
        if(error) {
            console.error('Erro ao atualizar o pedido:', error);
            return res.status(500).json({ error: 'Erro ao atualizar o pedido', details: error });
        }

        if(results.affectedRows === 0) {
            return res.status(404).json({ message: 'Pedido não encontrado' });
        }

        res.status(200).json({ message: 'Pedido atualizado com sucesso' });
    })
}
//Função para deletar um pedido(para uso em testes das requisições)

exports.deletePedidos = (req, res) => {
    const pedidoId = req.params.id;

    const query = 'DELETE FROM pedidos WHERE id = ?';

    pool.query(query, [pedidoId], (error, results) => {
        if(error) {
            console.error('Erro ao deletar o pedido:', error);
            return res.status(500).json({ error: 'Erro ao deletar o pedido', details: error });
        }

        if(results.affectedRows === 0) {
            return res.status(404).json({ message: 'Pedido não encontrado' });
        }

        res.status(200).json({ message: 'Pedido deletado com sucesso' });
    })


}



