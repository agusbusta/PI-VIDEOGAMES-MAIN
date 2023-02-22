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
	console.log(myGame);
	useEffect(() => {
		dispatch(getDetails(props.match.params.id));
		return () => {
			dispatch(pageDetail());
		};
	}, [dispatch]);

	return (
		<>
		  <Title />
		<div className={style.detailContainer}>
		  {myGame && Object.keys(myGame).length ? (
			<div className={style.detailCardlContainer}>
			  <div className={style.imgContainer}>
				<img className={style.detailImg} src={myGame.data.image ? myGame.data.image : myGame.data.img} alt='' />
			  </div>
			  <div className={style.detailDataContainer}>
			  <h1 className={style.textPName}>{myGame.data.name}</h1>
			  <p className={style.textP}>Platforms: {myGame.data.platforms.join(' - ')}</p>
				<p className={style.textP}>Genres: {myGame.data.genres}</p>
				<p className={style.textP}>Rating: {myGame.data.rating}</p>
				<p className={style.textP}>Released: {myGame.data.released}</p>
			  </div>
			  <p className={style.textPDesc}>{myGame.data.description}</p>
			</div>
		  ) : (
			  <Loader />
		  )}
		</div>
		  </>
	  );
	}	  

//----------------------------------------------------->

