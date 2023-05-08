import { useContext } from 'react';
import './History.css'
import { AuthContext } from '../Provider/Provider';
import { Container } from 'react-bootstrap';

const History = () => {
    const { num, price, grandTotal, handeClearCart } = useContext(AuthContext);
    return (
        <Container className='px-5'>
            <div className='summery mt-5 h-100 py-5'>
                <h3 className='h3 mb-4 text-center'>Order Summery</h3>
                <p className='px-3 small'>Seleceted items: {num} </p>
                <p className='px-3 small'>Total Prices: {price} </p>
                <p className='px-3 small'>Total Shipping Charge: $5</p>
                <p className='px-3 small'>Tax: $114</p>
                <h6 className='px-3'>Grand Total: ${grandTotal}</h6>
                <button className='btn mx-auto d-block mt-4 mb-3 w-75 btn-danger' onClick={handeClearCart}>

                    Clear Cart
                </button>
                <button className='btn mx-auto d-block w-75 btn-warning'>
                    Proceed CheckOut

                </button>
            </div>
        </Container>
    );
};

export default History;