import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

const app = shallow(<App />);

it('renders correctly', () => {
  expect(app).toMatchSnapshot();
});

it('inits the `state` with an empty list of gifts', () => {
  expect(app.state().gifts).toEqual([]);
});

it('add a new gift to `state` when clicking the `add gift` button', () => {
  app.find('.btn-add').simulate('click');
  expect(app.state().gifts).toEqual([{ id: 1 }]);
});

// have to equal 2 to prevent test polution
it('should add a new gift to the rendered list when clicking the `add gift`', function () {
  app.find('.btn-add').simulate('click');
  expect(app.find('.gift-list').children().length).toEqual(2);
});
