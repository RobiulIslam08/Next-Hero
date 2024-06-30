import React from 'react';

const categoryDetailPsage = ({params}) => {
	console.log(params)
	if(params.features.length == 2){
		return <div>{params.features[1]}</div>
	}
	return (
		<div>
			categories details page
		</div>
	);
};

export default categoryDetailPsage;