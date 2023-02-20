//<---------------IMPORTACIONES------------------->

import React from 'react';
import { Link } from 'react-router-dom';
import style from './Title.module.css'

//<------------------------------------------------------>

//<-----------------COMPONENTE TITLE------------------>

export default function Title() {
	return (
		<div className={style.titleCont}>
			<Link to={'/home'}>
				<h1 className={style.titleGlobal} >HENRY VIDEOGAMES</h1>
			</Link>
		</div>
	);
}

//<------------------------------------------------------>