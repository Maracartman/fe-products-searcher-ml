import React from 'react';
import { PriceLabel } from '../components/price-label/price-label';
import { shallow } from 'enzyme';

describe('PriceLabel test suite', () => {
  const priceSample = '15.000';
  const float = '99';
  it('Should loading match Snapshot', () => {
    const price = shallow(<PriceLabel float={float}>{priceSample}</PriceLabel>);
    expect(price).toMatchSnapshot();
  });
  it('Should PriceLabel render expected price', () => {
    const price = shallow(<PriceLabel float={float}>{priceSample}</PriceLabel>);
    expect(price.contains(priceSample)).toEqual(true);
  });
  it('Should PriceLabel not render floats', () => {
    const price = shallow(<PriceLabel float={float}>{priceSample}</PriceLabel>);
    expect(price.contains(float)).toEqual(false);
  });

  it('Should PriceLabel render floats', () => {
    const price = shallow(
      <PriceLabel float={float} showFloating>
        {priceSample}
      </PriceLabel>
    );
    expect(price.contains(float)).toEqual(true);
  });

  it('Should PriceLabel show increased price amount', () => {
    const price = shallow(
      <PriceLabel float={float} increaseSize>
        {priceSample}
      </PriceLabel>
    );
    console.log(price.html())
    expect(price.find('.price__label--increased').length)
    .toBeGreaterThan(0);
  });
});
