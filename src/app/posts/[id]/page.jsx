import React from 'react';
const getDetailsPost = async (id) =>{
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
	const data = await res.json();
	return data
}
const page = async ({params}) => {
	console.log(params.id)
	const data = await getDetailsPost(params.id)
	console.log(data)
	
	return (
		<div>
			<div className='border bottom-1 border-green-500 p-2'>
							<p>{data?.title}</p>
							<p>{data?.body}</p>
							
						</div>
		</div>
	);
};

export default page;