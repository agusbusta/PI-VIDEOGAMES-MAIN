//<---------IMPORTACIONES---------------->
const axios = require('axios');
require('dotenv').config();
const { Genre } = require('../db');
const { API_KEY } = process.env;
//------------------------------------->

//<-------TRAER GENRES DESDE LA API---->
const getGenres = async () => {
	try {
		const genres = await Genre.findAll();
		if (!genres.length) {
			const genresInformation = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`);
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