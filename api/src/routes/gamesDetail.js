//<--------------IMPORTACIONES / DECLARACIONES --------------------->

const { Router } = require('express');
const getDetailGame = require('../controllers/getGameDetail');
const { Videogame, Genre } = require('../db');
const router = Router();

//------------------------------------------------->


//<--------------RUTA GET--------------------->


router.get('/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const detailInfoDB = async () => {
			try {
				const dbData = await Videogame.findAll({
					include: {
						model: Genre,
						attribute: ['name'],
						through: {
							attributes: [],
						},
					},
				});
				return dbData;
			} catch (error) {
				console.log({ error: error.message });
			}
		};

		if (id) {
			const dbGames = await detailInfoDB();
			const idGameDB = dbGames.find((game) => game.id === id);
			if (idGameDB) return res.status(200).send(idGameDB);

			const gameApi = await getDetailGame(id);
			return res.status(200).send(gameApi);
		}
	} catch (error) {
		res.status(404).send('ERROR: Game not found!!');
	}
});



//------------------------------------------------->


//<---------------EXPORTACIONES-------------------->

module.exports = router;

//------------------------------------------------->