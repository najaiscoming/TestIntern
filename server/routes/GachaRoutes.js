const express = require('express');
const router = express.Router();
const GachaController = require('../controllers/GachaController');

//App Routes
router.get('/', GachaController.homepage);



module.exports = router;
