import React from 'react';
import './price-label.scss';
import cx from 'classnames';
import PropTypes from 'prop-types';

export const PriceLabel = ({
  children,
  keyId,
  float,
  showFloating,
  increaseSize
}) => (
  <div className={'presentational-price__container'}>
    <p
      key={keyId}
      role={'presentation'}
      className={cx({
        price__label: !increaseSize,
        'price__label--increased': increaseSize
      })}
    >
      {children}
    </p>
    {showFloating && (
      <p
        key={`${keyId}--float`}
        role={'presentation'}
        className={cx({
          'price__label--digits': !increaseSize,
          'price__label--digits--increased': increaseSize
        })}
      >
        {float}
      </p>
    )}
  </div>
);

PriceLabel.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.number,
    PropTypes.string
  ]).isRequired,
  keyId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  float: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  showFloating: PropTypes.bool,
  increaseSize: PropTypes.bool
};

PriceLabel.defaultProps = {
  increaseSize: false,
  showFloating: false,
  float: '',
  keyId: Math.random() / 12 + 1333 * Math.random()
};
