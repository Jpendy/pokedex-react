import React from 'react';
import { shallow } from 'enzyme';
import SearchPage from './SearchPage';

// describe('App Component', () => {
//   it('renders App', () => { 
//     const wrapper = shallow(<App/>);
//     expect(wrapper).toMatchSnapshot()
// })
// });

test('App Snapshot', () => {
  const wrapper = shallow(<SearchPage/>);

  expect(wrapper).toMatchSnapshot();
});


test('sections', () => {
  const wrapper = shallow(<SearchPage />);

  expect(wrapper.find('section').length).toBe(2);
})

