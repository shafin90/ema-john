import './Shop.css';
import Grid from '../Grid/Grid';
import Summery from '../Summery/Summery';
import { Container, Row, Col } from 'react-bootstrap';

const Shop = () => {
    
    return (
        <Container fluid className='grid p-5'>
            <Row>
                <Col lg={9}>
                    <Grid></Grid>
                </Col>
                <Col lg={3}>
                    <Summery></Summery>
                </Col>
            </Row>
        </Container>
    );
};

export default Shop;
