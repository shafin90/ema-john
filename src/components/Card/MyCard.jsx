import { Card, Button } from 'react-bootstrap';
import './MyCard.css';

function MyCard({ item }) {
  console.log(item);
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
        <Button className='card_btn' variant="primary">Add to Cart</Button>
      </Card.Body>
    </Card>
  );
}

export default MyCard;
