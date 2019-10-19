/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { Loading } from '../loading/loading';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { PriceLabel } from '../price-label/price-label';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import './product-details.scss';
import PropTypes from 'prop-types';

export const ProductDetails = ({ selectedProduct, searchAndShowProduct }) => {
  const { id } = useParams();
  let history = useHistory();
  useEffect(() => {
    if (!selectedProduct) {
      searchAndShowProduct(id, history);
    } else {
    }
  }, []);
  const doPriceContainsDot = amount => amount.toString().includes('.');
  const formatAmount = price => {
    const currencyFormat = new Intl.NumberFormat('de-DE');
    const formatedAmount = currencyFormat.format(
      doPriceContainsDot(price.amount)
        ? price.amount
        : price.amount * Math.pow(10, -price.decimals)
    );
    return formatedAmount.split(',');
  };
  return (
    <React.Fragment>
      {!selectedProduct && <Loading />}
      {selectedProduct && (
        <div
          id={'product_information'}
          className={'product-information__container'}
        >
          <Row>
            <Col md={12} lg={8} xs={12} sm={12}>
              <img
                className={'product__picture'}
                src={selectedProduct.picture}
                alt={'Foto producto'}
              />
            </Col>
            <Col>
              <Row className={'product-status__container'}>
                <p>{`${selectedProduct.condition} - ${selectedProduct.sold_quantity} vendidos`}</p>
              </Row>
              <Row className={'title__container'}>
                <h2>{selectedProduct.title}</h2>
              </Row>
              <Row className={'price__container'}>
                <PriceLabel
                  keyId={'product-details--price'}
                  float={formatAmount(selectedProduct.price)[1]}
                  increaseSize
                  showFloating
                >
                  {`${selectedProduct.price.currency_symbol} ${
                    formatAmount(selectedProduct.price)[0]
                  }`}
                </PriceLabel>
              </Row>
              <Row className={'button__container'}>
                <Col>
                  <Button
                    variant="primary"
                    onClick={() => alert('Proximamente !')}
                  >
                    Comprar
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className={'descriptions__container--title'}>
            <Col>
              <h2>Descripción del producto</h2>
            </Col>
          </Row>
          <Row className={'descriptions__container--info'}>
            <Col>
              <h3>{selectedProduct.description}</h3>
            </Col>
          </Row>
        </div>
      )}
    </React.Fragment>
  );
};

ProductDetails.propTypes = {
  selectedProduct: PropTypes.object,
  searchAndShowProduct: PropTypes.func.isRequired
};

ProductDetails.defaultProps = {
  selectedProduct: null
};

export default ProductDetails;
