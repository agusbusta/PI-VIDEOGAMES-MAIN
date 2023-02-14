//<----------IMPORTACION-------------->

const axios = require('axios')
const { Router } = require('express');

//------------------------------------>

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

//<--------IMPORTACION Y DECLARACION DE RUTAS PARA SU USO------------->

const router = Router();
const games = require('./games');
const gamesDetail = require('./gamesDetail');
const genres = require('./genres');
const errors = require('./errors');

//---------------------------------------------------------------->

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/videogames', games);
router.use('/videogame', gamesDetail);
router.use('/genres', genres);
router.use('*', errors);

//---------------------------------------------------------------->

//<--------EXPORTACION------------->

module.exports = router;

//--------------------------------->