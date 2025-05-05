const express = require('express');
const router = express.Router();
const pedidosController = require('../controllers/pedidosController')

router.post('/pedidos', pedidosController.postPedidos);
router.get('/pedidos', pedidosController.getPedidos);
router.delete('/pedidos/:id', pedidosController.deletePedidos);
router.put('/pedidos/:id', pedidosController.updatePedidos);
router.get('/pedidos/:id', pedidosController.getByIdPedidos);
router.get('/pedidos/status/:status', pedidosController.getPedidosPorStatus);

module.exports = router;