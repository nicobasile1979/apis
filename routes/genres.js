const express = require('express');
const router = express.Router()
const genresController = require('../controllers/genresController')

router.get('/', genresController.getAll)
router.get('/detail/:id', genresController.getById)
router.post('/create', genresController.create)


module.exports = router