import React from 'react';
import { shallow } from 'enzyme';
import { Loading } from '../components/loading/loading';

describe('Loading test suite', () => {
  it('Should loading match Snapshot', () => {
    const loading = shallow(<Loading />);
    expect(loading).toMatchSnapshot();
  });
});
