//<------------IMPORTACIONES-------------->

import {
	GET_ALL_GAMES,
	GET_NAME_GAMES,
	GET_DETAILS,
	PAGE_DETAIL,
	GET_GENRES,
	POST_GAME,
	ORDER_BY_NAME,
	ORDER_BY_RATING,
	FILTER_GENRES,
	FILTER_CREATED,
	ERROR,
} from './actions';

//--------------------------------------->

//-------------INICIAL STATES------------>

const initialState = {
    games: [],
    allGames: [],
    error: {},
    genres: [],
    details: [],
}

//--------------------------------------->

//-----------------SWITCH---------------->

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_GAMES:
            return {
                ...state,
                games: action.payload,
                allGames: action.payload,
            };
        case ERROR: 
            return {
                ...state,
                error: action.payload,
            };
        case GET_NAME_GAMES:
            return {
                ...state,
                games: action.payload,
            };
        case GET_GENRES:
            return {
                ...state,
                genres: action.payload,
            };
        case GET_DETAILS:
            return {
                ...state,
                detail: action.payload,
            };
        case POST_GAME:
            return {
                ...state,
            };
        case FILTER_GENRES:
            const gamesFiltByGenres = action.payload;
            state.games = state.allGames.filter((videogames) => videogames.genres?.includes(gamesFiltByGenres));
            if (action.payload === 'all') state.games = state.allGames;
            if (state.games.length === 0) {
                alert('Game not found!');
                state.games = state.allGames;
            }
            return {
                ...state,
                games: state.games,
            }; 
        case ORDER_BY_NAME:
			let sortedArr = action.payload === 'A-Z'
					? state.games.sort(function (a, b) {
							if (a.name > b.name) {
								return 1;
							}
							if (b.name > a.name) {
								return -1;
							}
							return 0;
					  })
					: state.games.sort(function (a, b) {
							if (a.name > b.name) {
								return -1;
							}
							if (b.name > a.name) {
								return 1;
							}
							return 0;
					  });
			return {
				...state,
				games: sortedArr,
			};
        case ORDER_BY_RATING:
            let sortedArr2 =
                action.payload === 'L-H'
                    ? state.games.sort(function (a, b) {
                            if (a.rating > b.rating) {
                                return 1;
                            }
                            if (b.rating > a.rating) {
                                return -1;
                            }
                            return 0;
                      })
                    : state.games.sort(function (a, b) {
                            if (a.rating > b.rating) {
                                return -1;
                            }
                            if (b.rating > a.rating) {
                                return 1;
                            }
                                return 0;
                          });
                return {
                    ...state,
                    games: sortedArr2,
                };          
        case PAGE_DETAIL:
            return {
                    ...state,
                    detail: action.payload,
                };
        case FILTER_CREATED:
            const createdFilter =
                    action.payload === 'db'
                        ? state.allGames.filter((e) => e.createdInDb)
                        : state.allGames.filter((e) => !e.createdInDb);
            return {
                ...state,
                games: action.payload === 'origin' ? state.allGames : createdFilter,
                };

        default: 
            return { ...state};
    }
}


//--------------------------------------->

