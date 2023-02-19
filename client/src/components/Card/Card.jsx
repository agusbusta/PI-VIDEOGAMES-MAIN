//<------------------IMPORTACIONES---------------------->

import React from 'react';
import  style  from './Card.module.css';

//----------------------------------------------------->

//<------------------COMPONENTE CARD---------------------->

export default function Card({ image, name, rating, genres }) {
	return (
		<div className={style.cardContainer}>
			<img className={style.gameImg} src={image} alt='img not found' />
			<div className={style.detailContainer}>
				<h3>{name}</h3>
				<h4>Rating: {rating}</h4>
				<h4>Genres: {genres.join(' - ')}</h4>
			</div>
		</div>
	);
}

//----------------------------------------------------->
