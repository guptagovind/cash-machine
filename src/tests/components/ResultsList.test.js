import React from 'react';
import {shallow} from 'enzyme';
import ResultsList from '../../components/ResultsList';


let wrapper;
beforeEach(() => {
  wrapper = shallow(<ResultsList/>);
});

test('should render the resultsList', () => {
  expect(wrapper).toMatchSnapshot();
});
