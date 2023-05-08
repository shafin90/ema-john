import { Container, Row, Col } from 'react-bootstrap';
import OrderedList from '../OrderedList/OrderedList';
import History from '../History/History';


const ReviewOrder = () => {
  return (
    <Container fluid>
      <Row>
        <Col lg={6}>
          <OrderedList />
        </Col>
        <Col lg={6}>
          <History />
        </Col>
      </Row>
    </Container>
  );
};

export default ReviewOrder;
