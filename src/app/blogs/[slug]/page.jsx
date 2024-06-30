import React from 'react';

const page = ({params}) => {
	const blogs = [
		{
		  slug: "how-to-learn-react",
		  title: "How to Learn React",
		  description: "A comprehensive guide to getting started with React, including tutorials, resources, and best practices."
		},
		{
		  slug: "understanding-javascript-closures",
		  title: "Understanding JavaScript Closures",
		  description: "An in-depth explanation of closures in JavaScript, how they work, and why they are useful."
		},
		{
		  slug: "css-grid-layout",
		  title: "Mastering CSS Grid Layout",
		  description: "A detailed tutorial on using CSS Grid Layout to create complex, responsive web layouts with ease."
		},
		{
		  slug: "web-performance-optimization",
		  title: "Web Performance Optimization",
		  description: "Tips and techniques for optimizing web performance to improve load times and user experience."
		},
		{
		  slug: "nodejs-event-loop",
		  title: "The Node.js Event Loop",
		  description: "A deep dive into the Node.js event loop, explaining its phases and how it handles asynchronous operations."
		}
	  ];
	  const {title, description} = blogs.find(blog => params.slug === blog.slug)
	return (
		<div className='h-screen'>
			<p>{params.slug}</p>
			<h1>{title}</h1>
			<p>{description}</p>
		</div>
	);
};

export default page;