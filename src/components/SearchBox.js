import React from 'react';

const SearchBox = ({searchfield,searchChange}) => {
	return (
		<div className="pa2">
			<input
				aria-label='Search Robots'
				className="pa3 ba b--light-blue bg-lightest-blue"
				type='Search'
				placeholder='Search Robots'
				onChange = {searchChange}
			/>
		</div>
		);
};

export default SearchBox;