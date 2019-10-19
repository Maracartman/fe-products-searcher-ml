import React from 'react';
import { BreadCrumb } from '../components/bread-crumb/bread-crumb';
import { shallow } from 'enzyme';

describe('BreadCrumb test suite', () => {
  const categories = ['Test1', 'Test2', 'Test3'];
  it('Should not render anything without categories passes', () => {
    const component = shallow(<BreadCrumb categories={categories} />);
    expect(component).toMatchSnapshot();
  });

  it('Should BreadCrumb render expected text', () => {
    const component = shallow(<BreadCrumb categories={categories} />);
    expect(
      component.contains(
        `${categories.slice(0, categories.length - 1).join(' > ')}`
      )
    ).toEqual(true);
  });

   it('Expect BreadCrumb to not render expected text', () => {
    const component = shallow(<BreadCrumb />);
    expect(
      component.contains(
        `${categories.slice(0, categories.length - 1).join(' > ')}`
      )
    ).toEqual(false);
  });
});
