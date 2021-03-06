import React from 'react';

const Card = (props) => {
	return (
		<div className='bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt='robots' src={`https://robohash.org/${props.id}?size=150x150`} />
			<div>
				<h2 className = 'tc'>{props.name}</h2>
				<p  className = 'tc'>{props.email}</p>
			</div>
		</div>
		);
}

export default Card;
