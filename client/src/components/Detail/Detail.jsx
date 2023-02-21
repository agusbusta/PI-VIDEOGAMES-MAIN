//<------------------IMPORTACIONES---------------------->

import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getDetails, pageDetail } from '../../redux/actions';
import Loader from '../Loader/Loader';
import style from './Detail.module.css';
import Footer from '../Footer/Footer';
import Title from '../Title/Tittle';

//----------------------------------------------------->

//<------------------COMPONENTE DETAIL---------------------->

export default function Detail(props) {

	const dispatch = useDispatch();
	const myGame = useSelector((store) => store.detail);

	useEffect(() => {
		dispatch(getDetails(props.match.params.id));
		return () => {
			dispatch(pageDetail());
		};
	}, [dispatch]);

	return (
		<div className={style.detailCardContainer}>
		  <Title />
		  {myGame && Object.keys(myGame).length ? (
			<div className={style.divContainer}>
			  <div className={style.imgContainer}>
				<img src={myGame.image ? myGame.image : myGame.img} alt='' />
			  </div>
			  <div className={style.detailContainer}>
				<p>Platforms: {myGame.platforms}</p>
				<p>Genres: {myGame.genres}</p>
				<p>Rating: {myGame.rating}</p>
				<p>Released: {myGame.released}</p>
			  </div>
			  <h1 className={style.detailName}>{myGame.name}</h1>
			  <p className={style.detailGameDesc}>{myGame.description}</p>
			</div>
		  ) : (
			  <Loader />
		  )}
		  <Footer />
		</div>
	  );
		  }	  

//----------------------------------------------------->

