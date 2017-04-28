/**
 * Testing our Pre component
 */
import { ThemeProvider } from 'styled-components';

import { shallow, mount } from 'enzyme';
import React from 'react';
import theme from 'theme';

import Pre from '../index';

const children = (<h1>Test</h1>);

const renderComponent = (props = {}) => shallow(
  <Pre {...props} />
);


const renderComponentUsingTheme = (props = {}) => mount(
  <ThemeProvider theme={theme}>
    <Pre {...props} />
  </ThemeProvider>
);


describe('<Pre />', () => {
  it('should render an <Pre> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('pre').length).toBe(1);
  });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <pre> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('pre').length).toBe(1);
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
