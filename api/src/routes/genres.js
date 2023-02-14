//<--------------IMPORTACIONES / DECLARACIONES --------------------->

const { Router } = require('express');
const { Genre } = require('../db');
const router = Router();

//------------------------------------------------->


//<--------------RUTA GET--------------------->

router.get('/', async (req, res) => {
	try {
		const allGenres = await Genre.findAll();
		res.status(200).json(allGenres);
	} catch (error) {
		res.status(400).send({ error: error.message });
	}
});

//------------------------------------------------->



//<---------------EXPORTACIONES-------------------->

module.exports = router;

//------------------------------------------------->