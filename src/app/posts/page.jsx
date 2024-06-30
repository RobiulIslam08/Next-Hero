import Link from 'next/link';
import React from 'react';
const getData = async () => {
	const res = await fetch('https://jsonplaceholder.typicode.com/posts')
	const data = await res.json()
	return data
}
const page = async () => {
	const postData = await getData()
	console.log(postData)
	return (
		<div className='p-20'>
			post length {postData.length}
			<p>All Post Data </p>
			<div className='grid grid-cols-5 gap-5'>
				{
					postData.map(data => (
						<div className='border bottom-1 border-green-500 p-2'>
							<p>{data?.title}</p>
							<p>{data?.body}</p>
							<Link href={`/posts/${data.id}`}><button className='btn'>see details</button></Link>
						</div>
					)
					)
				}
			</div>
		</div>
	);
};

export default page;