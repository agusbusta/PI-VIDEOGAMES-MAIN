import React from 'react';
import SeachBar from '../SearchBar/SearchBar';
import style  from './NavBar.module.css';
import Title from '../Title/Tittle';

export default function NavBar() {
	return (
		<div className={style.headerContainer}>
			<SeachBar />
		</div>
	);
}