/**
 * Testing our H2 component
 */
import { shallow, mount } from 'enzyme';
import React from 'react';
import BootstrapProvider from '../../BootstrapProvider';
import H2 from '../H2';

const children = <p>Test</p>;

const renderComponent = (props = {}) => shallow(
  <H2 {...props} />
);


const renderComponentUsingTheme = (props = {}) => mount(
  <BootstrapProvider>
    <H2 {...props} />
  </BootstrapProvider>
);


describe('<H2 />', () => {
  it('should render an <H2> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('[tag="h2"]').length).toBe(1);
  });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <H2> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('h2').length).toBe(1);
  });
  it('should have an attribute color', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      color: 'test-color',
    });
    expect(renderedComponent.find('h2').hasClass('test-color'));
  });
  it('should have a classname lead', () => {
    const renderedComponent = renderComponentUsingTheme({
      lead: true,
    });
    expect(renderedComponent.find('h2').hasClass('lead'));
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
