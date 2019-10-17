import React from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

export const SearchResult = props => {
  let { id } = useParams();
  console.log(getUrlParameter('q'));
  return <div>SearchResult View</div>;
};

 const getUrlParameter = (name) => {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    let regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    let results = regex.exec(window.location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
  };
