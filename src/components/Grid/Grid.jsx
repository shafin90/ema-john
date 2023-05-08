import { useContext } from 'react';
import './Grid.css';
import { AuthContext } from '../Provider/Provider';
import MyCard from '../Card/MyCard';
import { Container, Row, Col } from 'react-bootstrap';

const Grid = () => {
    const { item } = useContext(AuthContext);
    console.log(item)

    return (
        <Container>
            <Row>
                {item.map(element => (
                    <Col className='mb-4' xs={12} sm={6} md={4} lg={4} key={element.id}>
                        <MyCard
                            item={element}





                        />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Grid;
