import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

// describe block setup BDD, update snapshot required via pressing 'u'
describe('App', () => {
  const app = shallow(<App />);

  it('renders correctly', () => {
    expect(app).toMatchSnapshot();
  });

  it('inits the `state` with an empty list of gifts', () => {
    expect(app.state().gifts).toEqual([]);
  });

  describe('when clicking the `add-gift` button', () => {
    // before each of the it blocks
    beforeEach(() => {
      app.find('.btn-add').simulate('click');
    });

    afterEach(() => {
      app.setState({ gifts: [] });
    });

    it('add a new gift to `state`', () => {
      expect(app.state().gifts).toEqual([{ id: 1 }]);
    });

    // have to equal 2 to prevent test pollution
    it('should add a new gift to the rendered list', function () {
      expect(app.find('.gift-list').children().length).toEqual(1);
    });

    it('should create a gift component', function () {
      expect(app.find('Gift').exists()).toBe(true);
    });
  });
});
