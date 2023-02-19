//<------------------IMPORTACIONES---------------------->

import React from 'react';
import style  from './Loader.module.css';

//----------------------------------------------------->


//<------------------COMPONENTE LOADER---------------------->

export default function Loader() {
	return (
		<div className={style.loaderContainer}>
			<span className={style.loader}></span>
		</div>
	);
}

//----------------------------------------------------->