import React from 'react';
import { BreadCrumb } from '../../components/bread-crumb/bread-crumb';
import { shallow } from 'enzyme';

describe('BreadCrumb test suite', () => {
  const categories = ['Test1', 'Test2', 'Test3'];
  it('Should not render anything without categories passes', () => {
    const component = shallow(<BreadCrumb categories={categories} />);
    expect(component).toMatchSnapshot();
  });
});
