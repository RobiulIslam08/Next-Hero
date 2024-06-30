import Heading from '@/Component/Heading/Heading';
import Link from 'next/link';
import React from 'react';

const page = () => {
	return (
		<main className="flex  flex-col items-center justify-between p-24">
      
        <Heading title="about" />
		<div className='space-x-5'>
			<Link href='/about/mission'>Missoion</Link>
			<Link href='/about/history'>History</Link>
		</div>
    </main>
	);
};

export default page;