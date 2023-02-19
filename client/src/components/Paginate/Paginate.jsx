import React from 'react';
import style from './Paginate.module.css';

export default function Paginate({ gamesPerPage, allGames, pages }) {
	const pageNumbers = [];

	for (let i = 0; i <= Math.ceil(allGames / gamesPerPage) - 1; i++) {
		pageNumbers.push(i + 1);
	}

	return (
		<nav className={style.paginadoNavContainer}>
			<ul className={style.paginadoList}>
				{pageNumbers &&
					pageNumbers.map((number) => (
						<li className={style.number} key={number}>
							<a onClick={() => pages(number)}>{number}</a>
						</li>
					))}
			</ul>
		</nav>
	);
}