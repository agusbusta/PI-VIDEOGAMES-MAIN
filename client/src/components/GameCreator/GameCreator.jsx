//<------------------IMPORTACIONES---------------------->

import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { postGame, getGenres } from '../../redux/actions';
import  style  from './GameCreator.module.css';
import Title from '../Title/Tittle';
import Footer from '../Footer/Footer';

//----------------------------------------------------->

//------------COMPONENTE GAME CREATOR------------------>

export default function GameCreateForm() {

	const dispatch = useDispatch();
	const history = useHistory();
	const genres = useSelector((state) => state.genres);
	const [errors, setErrors] = useState({});

	const [input, setInput] = useState({
		name: '',
		description: '',
		image: '',
		released: '',
		rating: 0,
		platforms: [],
		genres: [],
	});

	useEffect(() => {
		dispatch(getGenres());
	}, []);

	const validate = (input) => {
		const errors = {};
		if (!input.name.length) errors.name = 'Name is required!!';
		if (!input.description.length) errors.description = 'Description is required!!';
		if (!input.rating.length) errors.rating = 'rating is required!!';
		if (!input.genres[0]) {
			errors.genres = 'Minimun one Genre is required ';
		}
		return errors;
	};

	const handleChange = (e) => {
		setInput({
			...input,
			[e.target.name]: e.target.value,
		});
			setErrors(
			validate({
				...input,
				[e.target.name]: e.target.value,
			})
		); 
		
	};



	const handleSelectGenres = (e) => {
		if (!input.genres.includes(e.target.value)) {
			setInput({
				...input,
				genres: [...input.genres, e.target.value],
			});
			setErrors(
				validate({
					...input,
					genres: [...input.genres, e.target.value],
				})
			);
		} else {
			setInput({
				...input,
			});
		}
	};

	const handleDeleteGenres = (e) => {
		setInput({
			...input,
			genres: input.genres.filter((param) => param !== e),
		});
	};

	

	const handleSubmit = (e) => {
		e.preventDefault();
		const newGame = {
			name: input.name,
			description: input.description,
			image: input.image,
			released: input.released,
			rating: input.rating,
			platforms: input.platforms.join(', '),
			genres: input.genres.join(', '),
			
		};

		dispatch(postGame(newGame));
		setInput({
			name: '',
			description: '',
			image: '',
			released: '',
			rating: 0,
			platforms: [],
			genres: [],
		});
		alert('SUCCESSFULLY CREATED VIDEOGAME!!');
		history.push('/home');
	};

	return (
		<>
		<Title />
		<div className={style.allGCCont}>
			<div className={style.gameCreatorContainer}>
				<form onSubmit={(e) => handleSubmit(e)}>
					<h1 className={style.tituloGameC}>CREATE YOUR GAME!</h1>
					<div className={style.formDiv}>
						<label>Videogame Name: </label>
						<input
							className={style.formInput}
							type='text'
							placeholder='videogame'
							value={input.name}
							name='name'
							onChange={(e) => handleChange(e)}
						/>
						{errors.name && <p className={style.formError}>{errors.name}</p>}
					</div>
					<div className={style.formDiv}>
						<label>Description: </label>
						<textarea className={style.formInput}
							type='text'
							placeholder='description'
							value={input.description}
							name='description'
							onChange={(e) => handleChange(e)}
						/>
						{errors.description && <p className={style.formError}>{errors.description}</p>}
					</div>
					<div className={style.formDiv}>
						<label>Image: </label>
						<input
							className={style.formInput}
							type='url'
							placeholder='https://example.com'
							value={input.image}
							name='image'
							onChange={(e) => handleChange(e)}
						/>
						{errors.image && <p className={style.formError}>{errors.image}</p>}
					</div>
					<div className={style.formDiv}>
						<label>Released: </label>
						<input
							className={style.formInput}
							placeholder='released'
							type='date'
							min='1970-01-01'
							max='2026-12-30'
							value={input.released}
							name='released'
							onChange={(e) => handleChange(e)}
						/>
						{errors.released && <p className={style.formError}>{errors.released}</p>}
					</div>
					<div className={style.formDiv}>
						<label>Rating: </label>
						<input
							className={style.formInput}
							type='number'
							step='0.1'
							min='0'
							max='5'
							name='rating'
							value={input.rating}
							onChange={(e) => handleChange(e)}
						/>
						{errors.rating && <p className={style.formError}>{errors.rating}</p>}
					</div>
					<div className={style.selectPlatforms}>
						<label>Platforms: </label>
						<input
							className={style.formInput}
							type='text'
							placeholder='platforms'
							value={input.platforms}
							name='platforms'
							onChange={(e) => handleChange(e)}
						/>
						{errors.platforms && <p className={style.formError}>{errors.platforms}</p>}
					</div>
					<div className={style.selectGenres}>
						<label>Genres: </label>
						<select onChange={(e) => handleSelectGenres(e)}>
							<option value='all' disabled selected hidden>
								All
							</option>
							{genres?.map((e) => {
								return (
									<option key={e.id} value={e.name}>
										{e.name}
									</option>
								);
							})}
						</select>
						{errors.genres && <span>{errors.genres}</span>}
						<div>
							{input.genres?.map((e) => {
								return (
									<>
										<div className={style.genresSelected}>{e}</div>
										<button onClick={() => handleDeleteGenres(e)}>X</button>
									</>
								);
							})}{' '}
						</div>
					</div>
					{Object.keys(errors).length ? (
						<div>
							<input className={style.submitBtn} type='submit' disabled name='Send' />
						</div>
					) : (
						<div>
							<input className={style.submitBtn}  type='submit' name='Send' />
						</div>
					)}
				</form>
			</div>
			<Footer />
		</div>
	</>
	);
}



//----------------------------------------------------->