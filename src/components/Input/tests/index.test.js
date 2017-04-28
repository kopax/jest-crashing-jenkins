/**
 * Testing our Input component
 */
import { shallow, mount } from 'enzyme';
import React from 'react';
import BootstrapProvider from '../../BootstrapProvider';

import Input from '../index';

const renderComponent = (props = {}) => shallow(
  <Input {...props} />
);


const renderComponentUsingTheme = (props = {}) => mount(
  <BootstrapProvider>
    <Input {...props} />
  </BootstrapProvider>
);


describe('<Input />', () => {
  it('should render an <Input> tag without a theme', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('Input').length).toBe(1);
  });
  it('should have an attribute type without a theme', () => {
    const renderedComponent = renderComponent({
      type: 'button',
    });
    expect(renderedComponent.props().type).toEqual('button');
  });
  it('should have an attribute placeholder without a theme', () => {
    const renderedComponent = renderComponent({
      placeholder: 'Enter your input here',
    });
    expect(renderedComponent.props().placeholder).toEqual('Enter your input here');
  });
  it('should render a <input> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme();
    expect(renderedComponent.find('input').length).toBe(1);
    expect(renderedComponent.find('Input').length).toBe(1);
  });
  it('should have an attribute type with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      type: 'button',
    });
    expect(renderedComponent.find('input').props().type).toEqual('button');
  });
  it('should have an attribute placeholder with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      placeholder: 'Enter your input here',
    });
    expect(renderedComponent.find('input').props().placeholder).toEqual('Enter your input here');
  });
  it('should have a class form-control-static if static: true with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      static: true,
    });
    expect(renderedComponent.find('p').hasClass('form-control-static')).toBe(true);
  });
  it('should have a class form-control-file if type: file with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      type: 'file',
    });
    expect(renderedComponent.find('input').hasClass('form-control-file')).toBe(true);
  });
  it('should have a class form-check-input if addon: false with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      type: 'checkbox',
      addon: false,
    });
    expect(renderedComponent.find('input').hasClass('form-check-input')).toBe(true);
  });
  it('should NOT have a class form-check-input if addon: true with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      type: 'checkbox',
      addon: true,
    });
    expect(renderedComponent.find('input').hasClass('form-check-input')).toBe(false);
  });
  it('should have a class form-control-state-test with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      state: 'state-test',
    });
    expect(renderedComponent.find('input').hasClass('form-control-state-test')).toBe(true);
  });
  it('should have a class form-control-size-test with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      size: 'size-test',
    });
    expect(renderedComponent.find('input').hasClass('form-control-size-test')).toBe(true);
  });
  it('should not render with "form-check-input" nor "form-control" class when type is checkbox and addon is truthy', () => {
    const renderedComponent = shallow(<Input addon type="checkbox" />);
    expect(renderedComponent.hasClass('form-check-input')).toBe(false);
    expect(renderedComponent.hasClass('form-control')).toBe(false);
  });

  it('should not render with "form-check-input" nor "form-control" class when type is radio and addon is truthy', () => {
    const renderedComponent = shallow(<Input addon type="radio" />);
    expect(renderedComponent.hasClass('form-check-input')).toBe(false);
    expect(renderedComponent.hasClass('form-control')).toBe(false);
  });
});
