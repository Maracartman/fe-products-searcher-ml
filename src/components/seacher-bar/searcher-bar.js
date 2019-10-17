import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MlLogo from '../../assets/Logo_ML.png';
import SearchIcon from '../../assets/ic_Search.png';
import './searcher-bar.scss';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

export const SearchBar = ({ searchEvent, history }) => {
  return (
    <Row>
      <div md={'auto'} className={'row-search-bar-background-color'}>
        <Container>
          <Row className={'search-bar_content-container'}>
            <Col xs={2} md={1}>
              <img
                src={MlLogo}
                alt={'Ir a Inicio'}
                onClick={() => {
                  if (history) history.push('/');
                }}
              />
            </Col>
            <Col xs={9} md={11}>
              <InputGroup>
                <Form.Control type="text" placeholder="Nunca dejes de buscar" />
                <InputGroup.Append>
                  <Button variant="light">
                    <img src={SearchIcon} alt="buscar" />
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
