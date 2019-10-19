import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './loading.scss';

export const Loading = () => (
  <Row>
    <Col className={'spinner__container'}>
      <Spinner role="status" animation="border" variant="warning" />
    </Col>
  </Row>
);
