/* eslint react/no-unescaped-entities: 0 */
import React from 'react';
import './bread-crumb.scss';
import PropTypes from 'prop-types';

export const BreadCrumb = ({ categories }) => (
  <React.Fragment>
    {categories && (
      <div className={'bread-crumb__container'}>
        <p>
          {`${categories.slice(0, categories.length - 1).join(' > ')}`} >{' '}
          <b>{categories[categories.length - 1]}</b>
        </p>
      </div>
    )}
  </React.Fragment>
);

BreadCrumb.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string)
};
