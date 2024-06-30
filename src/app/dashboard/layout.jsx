import Link from 'next/link';
import React from 'react';

const layout = ({children}) => { 
	return (
		<main>
			<Link href="/">	<button className='btn  btn-success' > home</button></Link>
			{children}
			<p>dashboard end</p>
		</main>
	);
};

export default layout;