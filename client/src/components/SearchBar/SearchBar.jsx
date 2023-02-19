import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getNameGames, getAllGames } from '../../redux/actions';
import style from './SearchBar.module.css'

export default function SeachBar() {
	
	const dispatch = useDispatch();
	const [name, setName] = useState('');

	useEffect(() => {
		dispatch(getAllGames);
	}, [dispatch]);

	function handleInputChange(e) {
		e.preventDefault();
		setName(e.target.value);
	}

	function handleSubmit(e) {
		e.preventDefault();
		dispatch(getNameGames(name));
	}


	return (
		<div className={style.searchbarContainer}>
			<input className={style.searcher}
				type='text'
				placeholder='Search...'
				onChange={(e) => handleInputChange(e)}
			/>
			<button className={style.searchBtn} type='submit' onClick={(e) => handleSubmit(e)}>
				SEARCH
			</button>
		</div>
	);
}