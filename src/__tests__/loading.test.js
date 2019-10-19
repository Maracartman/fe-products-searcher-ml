import React from 'react';
import { Loading } from '../components/loading/loading';
import { shallow } from 'enzyme';

describe('Loading test suite', () => {

    it('Should loading match Snapshot', () => {
        const loading = shallow(<Loading />);
        expect(loading).toMatchSnapshot();
    })
})

