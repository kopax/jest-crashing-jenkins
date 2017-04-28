/**
 * Testing our InputGroup component
 */
import { shallow, mount } from 'enzyme';
import React from 'react';
import BootstrapProvider from '../../BootstrapProvider';
import InputGroup from '../InputGroup';

const children = (<h1>Test</h1>);

const renderComponent = (props = {}) => shallow(
  <InputGroup {...props} />
);


const renderComponentUsingTheme = (props = {}) => mount(
  <BootstrapProvider>
    <InputGroup {...props} />
  </BootstrapProvider>
);


describe('<InputGroup />', () => {
  it('should render an <InputGroup> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('InputGroup').length).toBe(1);
  });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <div> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('InputGroup').length).toBe(1);
  });
  it('should have a class input-group-size-test with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      size: 'size-test',
    });
    expect(renderedComponent.find('InputGroup').hasClass('input-group-size-test'));
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
