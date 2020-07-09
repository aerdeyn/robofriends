import { shallow, mount, render } from 'enzyme';
import React from 'react';	// needed to read JSX
import CounterButton from './CounterButton';

// it('expect to render CounterButton', () => {
// 	const mockColor = 'red';
// 	expect(shallow(<CounterButton color={mockColor}/>)).toMatchSnapshot();
// })

it('correctly increments CounterButton counter', () => {
	const mockColor = 'red';
	const wrapper = shallow(<CounterButton color={mockColor} />);

	// simulate a click
	wrapper.find('[id="counter"]').simulate('click');

	// confirm we got a click
	expect(wrapper.state()).toEqual({ count: 1});

	// confirm we set the right color
	expect(wrapper.props().color).toEqual('red');
})