//<----------IMPORTACIONES------------>
require('dotenv').config();
const axios = require('axios');
const { Videogame, Genre } = require('../db');
const { API_KEY } = process.env;
//------------------------------>


//<-------Traer Informacion de la API--------->
const getApiInformation = async ()  => {
    try {
        const games = [];
		for (let i = 1; i <= 5; i++) {
			let api = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=${i}`);
			api.data.results.map((x) => {
				games.push({
					id: x.id,
					name: x.name,
					image: x.background_image,
					rating: x.rating,
					genres: x.genres.map((x) => x.name),
					createdInDb: false,
				});
			});
		}
		return games;
	} catch (error) {
		console.log({ error: error.message });
	}
};

//-------------------------------------------------->

//<----------CONSULTA A LA BASE DE DATOS------------>

const getInformationDB = async () => {
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
		const dBGames = dbData.map((g) => {
			let gameDB = {
				id: g.id,
				name: g.name[0].toUpperCase() + g.name.substring(1),
				image: g.image,
				rating: g.rating,
				genres: g.genres.map((genre) => genre.name),
				createdInDb: g.createdInDb,
			};
			return gameDB;
		});
		return dBGames;
	} catch (error) {
		console.log({ error: error.message });
	}
};

//-------------------------------------------------------->

//<---------------TRAER INFO API + DB------------------>

const getAllGames = async () => {
	try {
		const apiInfo = await getApiInformation();
		const dbInfo = await getInformationDB();
		const infoTotal = [...apiInfo, ...dbInfo];
		return infoTotal;
	} catch (error) {
		console.log({ error: error.message });
	}
};
//------------------------------------------>

// <----------EXPORTACIONES----------------->

module.exports = getAllGames;

//------------------------------------------>