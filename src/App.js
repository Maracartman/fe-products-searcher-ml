/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import './App.scss';
import { SearchBar } from './components/seacher-bar/searcher-bar';
import { BreadCrumb } from './components/bread-crumb/bread-crumb';
import { Home } from './components/home';
import { Loading } from './components/loading/loading';
import Container from 'react-bootstrap/Container';
import { searchByQuery, searchProductById } from './services/api';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductDetails = React.lazy(() =>
  import('./components/product-details/product-details')
);

const SearchResult = React.lazy(() =>
  import('./components/search-result/search-result')
);

const ComponentLoadingFacade = (Component, props) => () => (
  <React.Suspense fallback={<Loading />}>
    <Component {...props} />
  </React.Suspense>
);

const App = () => {
  const [searchQuery, setSearchQuery] = useState(null);
  const [categories, setCategories] = useState(null);
  const [searchResult, setSearchResult] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const getProductsByQuerySearch = async history => {
    setCategories(null);
    setSearchResult(null);
    if (getUrlParameter('q')) {
      try {
        const { data } = await searchByQuery(getUrlParameter('q'));
        setCategories(data.categories);
        setSearchResult(data);
      } catch (e) {
        if (history) resetSearch();
      }
    }
  };

  const searchAndShowProduct = async (id, history) => {
    setSelectedProduct(null);
    try {
      const {
        data: { item }
      } = await searchProductById(id);
      setSelectedProduct(item);
      setCategories(item.categories);
      if (history) history.push(`/items/${id}`);
    } catch {
      if (history) resetSearch(history);
    }
  };

  const resetSearch = history => {
    setCategories(null);
    setSearchResult(null);
    setSearchQuery(null);
    if (history) history.push('/');
    window.history.pushState(null, window.document.title, window.location.href);
  };

  useEffect(() => {
    getProductsByQuerySearch();
  }, [searchQuery]);

  return (
    <React.Fragment>
      <Router>
        <SearchBar
          {...{
            searchQuery: searchQuery,
            setSearchQuery: setSearchQuery,
            resetSearch
          }}
        />
        <Container>
          <BreadCrumb categories={categories} />
          <div className={'main-content_body main-content_container'}>
            <Switch>
              <Route
                exact
                path="/items"
                component={ComponentLoadingFacade(SearchResult, {
                  searchResult,
                  searchAndShowProduct
                })}
              ></Route>
              <Route
                path="/items/:id"
                component={ComponentLoadingFacade(ProductDetails, {
                  selectedProduct,
                  searchAndShowProduct
                })}
              ></Route>
              <Route exact path="/">
                <Home
                  {...{
                    resetSearch: resetSearch
                  }}
                />
              </Route>
            </Switch>
          </div>
        </Container>
      </Router>
    </React.Fragment>
  );
};

const getUrlParameter = name => {
  name = name.replace(/[[]/, '\\[').replace(/[\]]/, '\\]');
  let regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  let results = regex.exec(window.location.search);
  return results === null
    ? ''
    : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

export default App;
