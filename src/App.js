import React, { useState } from 'react';
import './App.scss';
import { SearchBar } from './components/seacher-bar';
import { ProductDetails } from './components/product-details';
import { SearchResult } from './components/search-result';
import Container from 'react-bootstrap/Container';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [searchResult, setSearchResult] = useState(null);
  const searchSubmitClickEvent = id => {
    alert(id);
  };

  return (
    <React.Fragment>
      <SearchBar
        onClick={searchSubmitClickEvent}
      />
      <Container className={'main-content_container'}>
        <Router>
          <div className={'main-content_body'}>
            <Switch>
              <Route path="/items/:id">
                <SearchResult />
              </Route>
              <Route path="/details">
                <ProductDetails />
              </Route>
              <Route exact path="/">
                <div />
              </Route>
            </Switch>
          </div>
        </Router>
      </Container>
    </React.Fragment>
  );
};

export default App;
