import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavBar from '../Shared/NavBar/NavBar';
import Footer from '../Shared/Footer/Footer'
const Explore = () => {
    const [allItems,setAllItems] = useState([])

    useEffect(()=>{
        fetch('https://calm-stream-31615.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setAllItems(data))
    },[])
    return (
        <div>
            <NavBar/>
            <Container className="py-5">
                {
                    allItems.length ? <Row xs={1} md={4} className="g-4">
                    {
                        allItems.map(item => <Col key={item._id}>
                            <Card>
                              <Card.Img style={{height:'150px'}} variant="top" src={item?.img} />
                              <Card.Body>
                                <Card.Title>{item?.productName}</Card.Title>
                                <Card.Title>${item?.price}</Card.Title>
                                <Card.Text>{item?.des.slice(0,50)}</Card.Text>
                                <Link to={`/purchase/${item._id}`}><Button className="btn btn-warning">Purchase</Button></Link>
                              </Card.Body>
                            </Card>
                          </Col>)
                    }
                    </Row> : <h2>Loading...</h2>
                }
            </Container>
            <Footer/>
        </div>
    );
};

export default Explore;