import React from 'react';
import {shallow} from 'enzyme';
import ResultListElement from '../../components/ResultListElement';


let wrapper;
beforeEach(() => {
  const result=100;
  wrapper = shallow(<ResultListElement result={result}/>);
});

test('should render the resultsList', () => {
  expect(wrapper).toMatchSnapshot();
});
