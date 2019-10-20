/* eslint-disable */
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { PriceLabel } from '../price-label/price-label';
import shippingLogo from '../../assets/ic_shipping.png';
import './search-result.scss';

export const SearchItem = ({
  id,
  title,
  price,
  picture,
  free_shipping,
  seller_city,
  index,
  searchAndShowProduct
}) => {
  const history = useHistory();
  const productClickEventHandler = id => {
    searchAndShowProduct(id, history);
  };
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
      {index > 0 && <div className={'upstairs-container_border'} />}
      <Row
        className={'search-item_container'}
        onClick={() => productClickEventHandler(id)}
      >
        <Col md={2} xs={3} className={'search-item-img_container'}>
          <img
            src={picture}
            className={'search-item_picture'}
            alt={'search-item-result'}
          />
        </Col>
        <Col md={8} xs={8}>
          <Row>
            <Col md={12} className={'price--free-shipping__container'}>
              <PriceLabel
                keyId={`search-item-price-${id}`}
                float={formatAmount(price)[1]}
              >
                {`${price.currency_symbol} ${formatAmount(price)[0]}`}
              </PriceLabel>
              <div className={'item--free-shipping_container'}>
                {free_shipping && (
                  <img alt="free_shipping" src={shippingLogo} />
                )}
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <p style={{ fontSize: '18px' }}>{title}</p>
            </Col>
          </Row>
        </Col>
        <Col className={'hide--xs hide--sm city__container'}>
          <p style={{ fontSize: '12px' }}>{seller_city}</p>
        </Col>
      </Row>
    </React.Fragment>
  );
};

SearchItem.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string.isRequired,
  price: PropTypes.object.isRequired,
  picture: PropTypes.string.isRequired,
  free_shipping: PropTypes.bool.isRequired,
  condition: PropTypes.string.isRequired
};

SearchItem.defaultProps = {
  id: Math.random() * Math.random() + 9
};
export default SearchItem;
