import React from 'react';
import { mount } from 'enzyme';
import Header from './Components/Header';

describe('<Home /> ', () => {
  it('Renders without crashing', () => {
    const app = mount(<Header />);
    expect(app.find('.head').text().toEqual('Goodwatch'))
  })
})
