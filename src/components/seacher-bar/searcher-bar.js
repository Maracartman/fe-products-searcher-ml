/* eslint-disable */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './searcher-bar.scss';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import SearchIcon from '../../assets/ic_Search.png';
import MlLogo from '../../assets/Logo_ML.png';

export const SearchBar = ({ searchQuery, setSearchQuery, resetSearch }) => {
  const history = useHistory();
  const [typedValue, setTypedValue] = useState(searchQuery || '');

  const searchClickEvent = query => {
    setSearchQuery(query);
    history.push(`/items?q=${query}`);
  };

  const goToHomeClickEvent = () => {
    resetSearch(history);
  };

  const typeEventListener = event => {
    event.preventDefault();
    setTypedValue(event.target.value);
  };
  const keyPressListener = event => {
    if (event.keyCode === 13) searchClickEvent(typedValue);
  };
  return (
    <Row>
      <div md={'auto'} className={'row-search-bar-background-color'}>
        <Container>
          <Row className={'search-bar_content-container'}>
            <Col xs={2} md={1}>
              <img
                style={{ cursor: 'pointer' }}
                src={MlLogo}
                alt={'Ir a Inicio'}
                onClick={goToHomeClickEvent}
              />
            </Col>
            <Col xs={9} md={11}>
              <InputGroup>
                <Form.Control
                  type="text"
                  placeholder="Nunca dejes de buscar"
                  value={typedValue}
                  onChange={typeEventListener}
                  onKeyDown={keyPressListener}
                ></Form.Control>
                <InputGroup.Append>
                  <Button variant="light">
                    <img
                      src={SearchIcon}
                      alt="buscar"
                      onClick={() => searchClickEvent(typedValue)}
                    />
                  </Button>
                </InputGroup.Append>
              </InputGroup>
            </Col>
          </Row>
        </Container>
      </div>
    </Row>
  );
};

export default SearchBar;
