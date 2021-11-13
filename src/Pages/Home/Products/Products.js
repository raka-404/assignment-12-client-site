
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Products.css'

const Products = () => {
    const [products,setProducts] = useState([])
    useEffect(()=>{
        fetch('https://calm-stream-31615.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    return (
        <div className="py-5">
            <Container>
                <div className="w-100 mx-auto">
                <h3 className="text-center"><span className="text-warning">Jewelry</span> luxury product</h3>
                <p className="text-center">Follow your true passion, let your jewelry guide you</p>
                </div>
                {
                    products.length ? <Row xs={1} md={3} className="g-4">
                    {
                        products.slice(0,6).map(product => <Col key={product?._id}>
                            <Card className="product">
                                <Card.Img style={{height:'250px'}} variant="top" src={product?.img}/>
                                <div className="p-3">
                                <div className="d-flex align-items-center justify-content-between">
                                    <Card.Title>{product?.productName}</Card.Title>
                                </div>
                                <p className="p-0 m-0">{product?.des}</p>
                                <div>
                                    <h2>$ {product?.price}</h2>
                                    <Link to={`/purchase/${product._id}`}><Button><span className="btn btn-warning">Order now</span></Button></Link>
                                </div>
                                </div>
                            </Card>
                            </Col>)
                    }
                </Row> : <h2>Loading...</h2>
                }
            </Container>
        </div>
    );
};

export default Products;