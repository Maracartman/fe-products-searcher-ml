import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { SearchItem } from './search-item';
import { Loading } from '../loading/loading';
import './search-result.scss';

const getUrlParameter = name => {
  const name2 = name.replace(/[[]/, '\\[').replace(/[\]]/, '\\]');
  const regex = new RegExp(`[\\?&]${name2}=([^&#]*)`);
  const results = regex.exec(window.location.search);
  return results === null
    ? ''
    : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

export const SearchResult = ({ searchResult, searchAndShowProduct }) => (
  <React.Fragment>
    <Helmet>
      <title>
        MercadoLibre Searcher - Resultados para: {getUrlParameter('q')}
      </title>
      <meta
        name="description"
        content={`Productos obtenidos para la busqueda ${getUrlParameter(
          'q'
        )}, selecciona el articulo que buscas y mira sus detalles!`}
      />
    </Helmet>
    {searchResult && (
      <div>
        {searchResult.items.map((item, index) => (
          <div key={`search-item`}>
            <SearchItem
              {...item}
              index={index}
              searchAndShowProduct={searchAndShowProduct}
            />
          </div>
        ))}
      </div>
    )}
    {!searchResult && <Loading />}
  </React.Fragment>
);

SearchResult.propTypes = {
  searchResult: PropTypes.object
};

export default SearchResult;
