"use client"
import React, { useState } from 'react';

const Meals = () => {
	const [search, setSearch] = useState('')
	const handler = (e) =>{
		setSearch(e.target.value)
		console.log(search)
	}
	return (
		<div>
			<div className=''>
				<input onChange={handler} className='p-2 border-transparent outline-none ' type="text" name="" id="" />
				<button className='bg-red-400 p-2 text-black'> Search</button>
			</div>
		</div>
	);
};

export default Meals;