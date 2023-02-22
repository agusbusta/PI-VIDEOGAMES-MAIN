//<-----------------IMPORTACIONES---------------------->

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	getAllGames,
	getGenres,
	orderByName,
	orderByRating,
	filterGenres,
	filterCreated,
} from '../../redux/actions';
import  style  from './Filters.module.css';

//----------------------------------------------------->


//<------------------COMPONENTE FILTERS---------------------->

export default function Filters({ setCurrentPage, setOrden }) {
	const dispatch = useDispatch();
	const allGenres = useSelector((state) => state.genres);

	useEffect(() => {
		dispatch(getGenres());
	}, [dispatch]);

    //<--RESET CLICK-->

	const handleClick = (e) => {
		e.preventDefault();
		dispatch(getAllGames());
	};

    //<--A-Z ORDER-->

	const handleSort = (e) => {
		e.preventDefault();
		e.target.value === 'all'
			? dispatch(orderByName) && setOrden(`ABC ${e.target.value}`)
			: dispatch(orderByName(e.target.value));
		setOrden(`ABC ${e.target.value}`);
		setCurrentPage(1);
	};

    //<--RATING ORDER-->

	const handleRating = (e) => {
		e.preventDefault();
		e.target.value === 'all'
			? dispatch(getAllGames) && setOrden(`Rating ${e.target.value}`)
			: dispatch(orderByRating(e.target.value));
		setOrden(`Rating ${e.target.value}`);
		setCurrentPage(1);
	};

    //<--GENRES ORDER-->

	const handleGenres = (e) => {
		e.preventDefault();
		dispatch(filterGenres(e.target.value));
		setOrden(e.target.value);
		setCurrentPage(1);
	};

    //<--CREATED STORAGE FILTER-->

	const handleFilterCreated = (e) => {
		e.preventDefault();
		dispatch(filterCreated(e.target.value));
		setCurrentPage(1);
	};

	return (
		<div className={style.filtersContainer}>
			<button className={style.allgamesBtn}
				onClick={(e) => {
					handleClick(e);
				}}
			>
				RESET FILTERS
			</button>
			<select className={style.selectStyle} onChange={(e) => handleFilterCreated(e)}>
				<option value='' >
					Storage
				</option>
				<option value='lb'>Library</option>
				<option value='db'>Created in DB</option>
			</select>
			<select className={style.selectStyle}  onChange={(e) => handleSort(e)}>
				<option value=''>
					Sort by name
				</option>
				<option value='A-Z'>A to Z</option>
				<option value='Z-A'>Z to A</option>
			</select>
			<select className={style.selectStyle}  onChange={(e) => handleRating(e)}>
				<option value='' >
					Rating
				</option>
				<option value='L-H'>Low</option>
				<option value='H-L'>High</option>
			</select>
			<select className={style.selectStyle}  onChange={(e) => handleGenres(e)}>
				<option value=''>
					Genres
				</option>
				{allGenres?.map((e) => {
					return (
						<option key={e.id} value={e.name}>
							{e.name}
						</option>
					);
				})}
			</select>
		</div>
	);
}


//----------------------------------------------------->