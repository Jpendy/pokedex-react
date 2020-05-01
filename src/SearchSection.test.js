import React from 'react';
import { shallow } from 'enzyme';
import SearchSection from './SearchSection';

test('App Snapshot', () => {
    const wrapper = shallow(<SearchSection/>);
  
    expect(wrapper).toMatchSnapshot();
  });

  test('sections', () => {
    const wrapper = shallow(<SearchSection />);
  
    expect(wrapper.find('select').length).toBe(1);
  })
  
  
  test('sections', () => {
    const wrapper = shallow(<SearchSection />);
  
    expect(wrapper.find('option').length).toBe(13);
  })

  test('sections', () => {
    const wrapper = shallow(<SearchSection />);
  
    expect(wrapper.find('input').length).toBe(1);
  })

  test('sections', () => {
    const wrapper = shallow(<SearchSection />);
  
    expect(wrapper.find('button').length).toBe(1);
  })