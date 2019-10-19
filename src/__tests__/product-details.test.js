import React from 'react';
import { StateLessProductDetails } from '../components/product-details/product-details';
import { mount } from 'enzyme';
const detailsResponse = require('./responses/api.details.response.json');
const mockSearchAndShowProduct = jest.fn(() =>
  console.log('Called searchAndShowProduct')
);
describe('ProductDetails test suite', () => {
  beforeEach(() => {
   // mockSearchAndShowProduct.reset();
  });
  it('Should StateLessProductDetails component match the snapshot', () => {
    const productDetails = mount(
      <StateLessProductDetails
        selectedProduct={detailsResponse.item}
        searchAndShowProduct={mockSearchAndShowProduct}
      />
    );
    console.log(productDetails);
    expect(productDetails).toMatchSnapshot();
  });
});
