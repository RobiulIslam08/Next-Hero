"use client"
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import React from 'react';

const Navbar = () => {
	const pathName = usePathname();
	const router = useRouter()
	const links = [
		{
			title: "Home",
			path: "/",
		},
		{
			title: "Service",
			path: "/service",
		},
		{
			title: "About",
			path: "/about",
		},
		{
			title: "Blogs",
			path: "/blogs",
		},
		{
			title: "Dashboard",
			path: '/dashboard'
		},
		{
			title: 'Categories',
			path: "/categories"
		},
		{
			title: 'Posts',
			path: '/posts'
		},
		{
			title: 'Meals',
			path: '/meals'
		}
	];
	const handleButton = () =>{
		router.push('/about')
	}
	if(pathName.includes('dashboard')){
		return <div className='bg-fuchsia-500 px-10'>dashboard nav</div>
	}

	return (
		
			<nav className="bg-blue-800 text-white flex justify-between items-center  py-20">
				<h1 className='text-3xl pl-8'>Next <span className='text-red-500'>Hero</span></h1>
				<ul className="flex items-center justify-center gap-4 p-7">
					{links.map(link => (
						<li key={link.path}>
							<Link
								href={link.path}
								className={`${
									pathName === link.path ? " active text-red-900 font-bold text-3xl" : "text-white"
								}`}
							>
								{link.title}
							</Link>
						</li>
					))}
				</ul>
				<button onClick={handleButton} className='btn btn-secondary'>login</button>
			</nav>
	
	);
};

export default Navbar;
