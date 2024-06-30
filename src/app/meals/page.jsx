import Meals from '@/Component/Meals/Meals';
import React from 'react';
const getTime =async () =>{
	const res = await fetch('http://localhost:3000/time' , { cache: 'no-store' })
	const data = await res.json()
	return data.currentTime
}
const page = async() => {
	const time = await getTime()
	return (
		<div className='p-20 w-full mx-auto'>
			<p className="text-3xl font-bold text-blue-700">Time: {time}</p>
			<p className='text-3xl font-bold text-blue-600'>meals page </p>
			<p>please search your meals</p>
			<Meals></Meals>
		</div>
	);
};

export default page;