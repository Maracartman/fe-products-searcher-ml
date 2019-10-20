import React from 'react';
import { mount } from 'enzyme';
import { StateLessProductDetails } from '../components/product-details/product-details';

const detailsResponse = require('./responses/api.details.response.json');

const mockSearchAndShowProduct = jest.fn(() => {});
describe('ProductDetails test suite', () => {
  it('Should StateLessProductDetails component match the snapshot', () => {
    const productDetails = mount(
      <StateLessProductDetails
        selectedProduct={detailsResponse.item}
        searchAndShowProduct={mockSearchAndShowProduct}
      />
    );
    expect(productDetails).toMatchSnapshot();
  });
});
