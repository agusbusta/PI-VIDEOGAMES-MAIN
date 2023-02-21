//<--------------IMPORTACIONES / DECLARACIONES --------------------->

const { Router } = require('express');
const getAllGames = require('../controllers/getGames')
const { Videogame, Genre } = require('../db');
const router = Router();

//---------------------------------------------->


//<----------------RUTA GET--------------------->

router.get('/', async (req, res) => {
    try {
        const { name } = req.query;
        let allGames = await getAllGames();
        // IF QUERY
        if(name){
            let gameName = allGames.filter(g => g.name.toLowerCase().includes(name.toLowerCase())).slice(0, 15);
            gameName.length
                ? res.status(200).send(gameName) : res.status(400).send('Game not found!');
        }else{
            res.status(200).send(allGames)
        }
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
})
//------------------------------------------------->


//<-----------------RUTA POST---------------------->

router.post('/', async (req, res) => {
    try {
        let { name, image, rating, platforms, description, createdInDb, genres } = req.body;
        let gameCreated = await Videogame.create({
			name,
			image,
			rating,
			platforms,
			description,
			createdInDb,
		});
        let genresDatabase = await Genre.findAll({
			where: { name: genres },
		});
        gameCreated.addGenre(genresDatabase);
		res.status(200).send('game created successfully');
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});
//------------------------------------------------->


//<---------------EXPORTACIONES-------------------->

module.exports = router;

//------------------------------------------------->