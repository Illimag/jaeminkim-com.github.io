import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

import Test from '../../assets/img/aerial-cityscape-view-of-san-francisco-and-the-bay-2FPCNKG.jpg';

export const Home = () => (
  /* Start of JSX Fragment*/ 
  <>

<Card>
  <Card.Body>Home</Card.Body>
</Card>

  <Container fluid>
    <Row>
      <Col>
      <Image src={Test} fluid />
      </Col>
    </Row>
    <Row>
    <Col>
    <Image src={Test} fluid />
    </Col>
    <Col>
    <Image src={Test} fluid />
    </Col>
  </Row>
  <Row>
    <Col>
    <Image src={Test} fluid />
    </Col>
    <Col>
    <Image src={Test} fluid />
    </Col>
  </Row>
  <Row>
    <Col>
    <Image src={Test} fluid />
    </Col>
    <Col>
    <Image src={Test} fluid />
    </Col>
  </Row>
  </Container>

  </>
  /* End of JSX Fragment*/
)