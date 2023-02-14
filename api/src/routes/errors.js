//<--------------IMPORTACIONES / DECLARACIONES --------------------->

const { Router } = require('express');
const router = Router();
const axios = require('axios')

//------------------------------------------------->


//<--------------RUTA GET--------------------->

router.get('', async (req, res) => {
	res.status(404).send(`<h1> ERROR: PAGE NOT FOUND!!</h1>`);
});


//------------------------------------------------->



//<---------------EXPORTACIONES-------------------->

module.exports = router;

//------------------------------------------------->