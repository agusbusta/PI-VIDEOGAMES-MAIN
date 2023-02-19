//<------------------IMPORTACIONES---------------------->

import React from 'react';
import { Link } from 'react-router-dom';
import style from './landStyles.module.css'

//----------------------------------------------------->


//<--------------COMPONENTE LANDING PAGE----------------->

export default function LandingPage() {
	return (
		<div className={style.landingBody}>
		<div>
			<Link to='/home' style={{textDecoration:'none'}}>
				<div className={style.tituloCont} >
					<h1 className={style.enterStyle}>ENTER</h1>
				</div>
			</Link>
		</div>
		</div>
	);
}

//----------------------------------------------------->