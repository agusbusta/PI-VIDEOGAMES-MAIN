//<-----------IMPORTACIONES------------>

const axios = require('axios');

//------------------------------------>

//<-----------TRAER DETALLE DE JUEGO POR ID DESDE API------------>

const getDetailGame = async (idGame) => {
	let gamesApi = await axios.get(
		`https://api.rawg.io/api/games/${idGame}?key=$0fed0efdb6d9440fa875db594b9142cf`
	);

	const {
		id,
		name,
		background_image: image,
		rating,
		released,
		description_raw: description,
		platforms,
		genres,
	} = gamesApi.data;

	const game = {
		id,
		name,
		image,
		rating,
		released,
		description,
		platforms: platforms ? platforms.map((x) => x.platform.name) : null,
		genres: genres.map((e) => e.name),
		createdInDb: false,
	};

	return game;
};

//-------------------------------------->

//<-----------EXPORTACIONES------------>

module.exports = getDetailGame;

//-------------------------------------->