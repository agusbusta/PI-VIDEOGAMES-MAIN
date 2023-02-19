//<------------------IMPORTACIONES---------------------->

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllGames } from '../../redux/actions';
import style  from './Home.module.css'
import Filters from '../Filters/Filters'
import Card from '../Card/Card'
import NavBar from '../NavBar/NavBar'
import Paginate from '../Paginate/Paginate'
import Loader from '../Loader/Loader'
import Title from '../Title/Tittle';
import Footer from '../Footer/Footer'

//----------------------------------------------------->

//-------------------COMPONENTE HOME------------------->

export default function Home(){

        const dispatch = useDispatch();
        const allGames = useSelector((state) => state.games);

        const [order, setOrder] = useState('');
        const [currentPage, setCurrentPage] = useState(1);
		const [gamesPerPage, setGamesPerPage] = useState(15);


        const indexOfLastGame = currentPage * gamesPerPage; 
        const indexOfFirtsGame = indexOfLastGame - gamesPerPage; 
        const currentGames = allGames.slice(indexOfFirtsGame, indexOfLastGame);

        const pages = (pageNumber) => {
            setCurrentPage(pageNumber);
        }

        useEffect(() => {
            dispatch(getAllGames());
        }, [dispatch]);

        return (
            <div className={style.homeContainer}>
				<div className={style.titleCont}>
					<Title />
				</div>
                <div className={style.navBarContainer}>
                    <NavBar />
						</div>
				    {currentGames.length > 0 ? (
						<Filters setCurrentPage={setCurrentPage} setOrden={setOrder}></Filters>
						) : null}
				    <Paginate gamesPerPage={gamesPerPage} allGames={allGames.length} pages={pages} />
                <div className={style.cardsContainer}>
                {currentGames.length ? (
					currentGames?.map((e) => {
						return (
							<Link style={{textDecoration:'none'}} to={'/detail/' + e.id}>
								<Card
									key={e.id}
									name={e.name}
									image={e.image}
									rating={e.rating}
									genres={e.genres}
								/>
							</Link>
						);
					})
				) : (
						<Loader />
				)}
			</div>
			<div>
				<hr className={style.barras}></hr>
				<div className={style.createGameCont}>
				<h3 className={style.gamecreatorText}>Want to create your own game?</h3>
				<Link to='/create'>
					<button className={style.buttonCreateGame}>CREATE A GAME</button>
				</Link>
				</div>
			<hr ></hr>
			</div>
			<Footer />
		</div>
	);
}

//----------------------------------------------------->