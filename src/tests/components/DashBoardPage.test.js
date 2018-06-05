import React from 'react';
import {shallow} from 'enzyme';
import DashboardPage from '../../components/DashBoardPage';

let wrapper;
beforeEach(() => {
  wrapper = shallow(<DashboardPage/>);
});

test('should render the dashboard', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should give notes of 20 and 10 for amount 30', () => {
  const value = 30.00;
  wrapper.find('input').at(0).simulate('change', {
    target: {value}
  });
  expect(wrapper.state('amount')).toBe(value);
  wrapper.find('form').simulate('submit', {
    preventDefault() {
    }
  });
  expect(wrapper.state('results')).toEqual([20, 10]);
});

test('should give notes of 50, 20 & 10 for amount 80', () => {
  const value = 80.00;
  wrapper.find('input').at(0).simulate('change', {
    target: {value}
  });
  expect(wrapper.state('amount')).toBe(value);
  wrapper.find('form').simulate('submit', {
    preventDefault() {
    }
  });
  expect(wrapper.state('results')).toEqual([50, 20, 10]);
});

test('should throw NoteUnavailableException', () => {
  const value = 125;
  wrapper.find('input').at(0).simulate('change', {
    target: {value}
  });
  expect(wrapper.state('amount')).toBe(value);
  wrapper.find('form').simulate('submit', {
    preventDefault() {
    }
  });
  expect(wrapper.state('results')).toBe('throw NoteUnavailableException');
});

test('should throw InvalidArgumentException', () => {
  const value = -130.00;
  wrapper.find('input').at(0).simulate('change', {
    target: {value}
  });
  expect(wrapper.state('amount')).toBe(value);
  wrapper.find('form').simulate('submit', {
    preventDefault() {
    }
  });
  expect(wrapper.state('results')).toBe('throw InvalidArgumentException');
});

test('should return result of Empty Set', () => {
  const value = "NULL";
  wrapper.find('input').at(0).simulate('change', {
    target: {value}
  });
  expect(wrapper.state('amount')).toBe(value);
  wrapper.find('form').simulate('submit', {
    preventDefault() {
    }
  });
  expect(wrapper.state('results')).toEqual(['Empty Set']);
});


