import { Card, Button } from 'react-bootstrap';
import { BsCart } from 'react-icons/bs';
import './MyCard.css';
import { useContext } from 'react';
import { AuthContext } from '../Provider/Provider';

function MyCard({ item }) {

  // Context API =========================================
  const { handleCount } = useContext(AuthContext);
  
  // distructuring data from item=====================================
  const { img, name, price, seller, ratings } = item;








  return (
    <Card className='card'>
      <Card.Img variant="top" alt="product-image" src={img} />
      <Card.Body className='d-flex flex-column justify-content-between align-items-start'>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <p className="card-paragraph">Price: ${price}</p>
          <p className="card-paragraph small my-0 muted">Manufacturer: {seller}</p>
          <p className="card-paragraph small my-0 muted">Rating: {ratings}</p>
        </Card.Text>
        <Button className='card_btn' onClick={()=>{handleCount(price)}} variant="primary"><BsCart /> Add to Cart</Button>
      </Card.Body>
    </Card>
  );
}

export default MyCard;
