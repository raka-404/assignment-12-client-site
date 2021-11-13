import React from 'react';
import {Card, Col, Row, Container } from 'react-bootstrap';

const BackGround = () => {
    return (
        <div className="w-100">
            <h3 className="text-warning text-center">Specials</h3>
         
<Container>

<Row xs={1} md={4} className="g-4">
    <Col>
      <Card>
        <Card.Img variant="top" src="https://opencart.mahardhi.com/MT03/valley/image/cache/catalog/products/5-1000x1000.jpg" />
        <Card.Body>
          <Card.Title>Nawarat Necklecss</Card.Title>
        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card>
        <Card.Img variant="top" src="https://opencart.mahardhi.com/MT03/valley/image/cache/catalog/products/10-610x610.jpg" />
        <Card.Body>
          <Card.Title>
Ring</Card.Title>
        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card>
        <Card.Img variant="top" src="https://opencart.mahardhi.com/MT03/valley/image/cache/catalog/products/12-610x610.jpg" />
        <Card.Body>
          <Card.Title>
Belly Chain</Card.Title>
        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card>
        <Card.Img variant="top" src="https://opencart.mahardhi.com/MT03/valley/image/cache/catalog/products/3-610x610.jpg" />
        <Card.Body>
          <Card.Title>Engagement Ring</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  
</Row>
</Container>


        </div>
    );
};

export default BackGround;




