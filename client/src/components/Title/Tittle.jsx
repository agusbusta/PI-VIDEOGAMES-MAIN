import React from 'react';
import { Link } from 'react-router-dom';
import style from './Title.module.css'

export default function Title() {
	return (
		<div className={style.titleCont}>
			<Link to={'/home'}>
				<h1 className={style.titleGlobal} >HENRY VIDEOGAMES</h1>
			</Link>
		</div>
	);
}