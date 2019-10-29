import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { mount, shallow } from 'enzyme';
import Error from './Components/ErrorrPage';
import Tester from './Components/TestComponent';
const ReactTestRenderer = require('react-test-renderer');

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('<Error /> ', () => {
  it('smoke test', () => {
    shallow(<Error />);
  })

  // it('Renders without crashing', () => {
  //   const app = shallow(<Error />);
  //   const p = '<h3>Something Went Wrong!</h3>'
  //   expect(app.find('.error-page__container').toEqual(p))
  // })

  it('Should compare the component with a snapshot', () => {
    const component = '<div>Hello Jest</div>'
    expect(component).toMatchSnapshot();
  })
  const component = ReactTestRenderer.create(
    <Tester />
  );
  const json = component.toJSON();
  expect(json).toMatchSnapshot();
})


