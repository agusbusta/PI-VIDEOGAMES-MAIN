//<------------------IMPORTACIONES---------------------->

import React from 'react';
import style  from './Footer.module.css';

//----------------------------------------------------->


//----------------COMPONENTE FOOTER--------------------->

export default function Footer() {
		return (
			<div className={style.footerContainer}>
				<span className={style.footerText}>Created by Agustin Bustamante | © Copyright 2023</span><a className={style.iconLinks} href='https://github.com/agusbusta'>
My GitHub</a><a className={style.iconLinks} href='https://www.linkedin.com/in/agusbusta/'>My LinkedIn</a>
			
			</div>
		  )
	
}

//----------------------------------------------------->