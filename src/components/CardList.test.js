import { shallow, mount, render } from 'enzyme';
import React from 'react';	// needed to read JSX
import CardList from './CardList';

it('expect to render CardList', () => {
	const mockRobots = [
		{
			id: 1,
			name: 'John Snow',
			username: 'Johnny',
			email: 'johnny@gmail.com'
		}
	]
	expect(shallow(<CardList robots={mockRobots}/>)).toMatchSnapshot();
})