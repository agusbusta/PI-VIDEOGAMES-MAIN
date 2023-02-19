//<---------IMPORTACIONES---------------->
const axios = require('axios');
const { Genre } = require('../db');

//------------------------------------->

//<-------TRAER GENRES DESDE LA API---->

const getGenres = async () => {
	try {
		const genres = await Genre.findAll();
		if (!genres.length) {
			const genresInformation = await axios.get(`https://api.rawg.io/api/genres?key=0fed0efdb6d9440fa875db594b9142cf`);
			await Genre.bulkCreate(genresInformation.data.results);
		}
	} catch (error) {
		console.log({ error: error.message });
	}
};

//------------------------------------->


//<------------EXPORTACIONES----------->

module.exports = getGenres;

//------------------------------------->