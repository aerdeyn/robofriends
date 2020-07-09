import { shallow, mount, render } from 'enzyme';
import React from 'react';	// needed to read JSX
import Card from './Card';

it('expect to render Card', () => {
	expect(shallow(<Card />).length).toEqual(1)
})

it('expect to render Card', () => {
	expect(shallow(<Card />)).toMatchSnapshot();
})