import { Button, Card, Col, Row } from "react-bootstrap";
import './OrderedItem.css'
import { useContext } from "react";
import { AuthContext } from "../Provider/Provider";


const OrderedItem = ({ item }) => {

    const {handleRemove} = useContext(AuthContext);

    const { img, name, price ,shipping,id} = item;
    return (
 
            <Row className="my-5 ">
                <Col xs={2} className="d-flex justify-content-center align-items-center">
                    <img src={img} alt="product-image" className="card-img" />
                </Col>
                <Col xs={8}>
                    <Card.Body className='d-flex flex-column justify-content-between'>
                        <Card.Title className="h6">{name}</Card.Title>
                        <Card.Text>
                            <p className="card-paragraph my-0 small">Price: ${price} </p>
                            <p className="card-paragraph small my-0 muted">Shipping Charge: ${shipping}</p>
                            {/* <p className="card-paragraph small my-0 muted">Rating: {ratings}</p> */}
                        </Card.Text>
                    </Card.Body>
                </Col>
                <Col xs={2} className="d-flex justify-content-center align-items-center">
                    <Button variant="danger" onClick={()=>handleRemove(id)} className="delete-btn">Remove</Button>
                </Col>
            </Row>
   
    );
};

export default OrderedItem;