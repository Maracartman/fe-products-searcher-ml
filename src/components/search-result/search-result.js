import React from 'react';
import { SearchItem } from './search-item';
import { Loading } from '../loading/loading';
import './search-result.scss';
import PropTypes from 'prop-types';

export const SearchResult = ({ searchResult, searchAndShowProduct }) => (
  <React.Fragment>
    {searchResult && (
      <div>
        {searchResult.items.map((item, index) => (
          <div key={`search-item_${index}`}>
            <SearchItem {...item} index={index} searchAndShowProduct={searchAndShowProduct}/>
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
