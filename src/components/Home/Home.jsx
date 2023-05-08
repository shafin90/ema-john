import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import img from '../../../public/images/austin-wade-AoYT0ArTTmg-unsplash 1.png';
import './Home.css';
import { useNavigate } from 'react-router-dom';

function Home() {

  const navigate = useNavigate();

  const handleShop=()=>{
    navigate('/shop');
  }


  return (
    <Container>
      <Row className="my-5">
        <Col className='d-flex flex-column justify-content-center align-items-start ' lg={6}>
          <p className="text-warning small_p">Sale up to 70% off</p>
          <h1>New Collection For Fall</h1>
          <p className="lead">Discover all the new arrivals of ready-to-wear collection.</p>
          <Button onClick={handleShop} className=" btn  shop_now">Show Now</Button>
        </Col>
        <Col lg={6}>
          <Image className='image' src={img} fluid />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
