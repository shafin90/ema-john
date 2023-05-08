import { useContext } from 'react';
import './Summery.css';
import { AuthContext } from '../Provider/Provider';
import { useNavigate } from 'react-router-dom';



const Summery = () => {
  // context API=========================================================
  const { num, price, grandTotal, handeClearCart, shippingCost } = useContext(AuthContext);

  const navigate = useNavigate();


  // navigate to review order page============
  const handleReviewOrder = () => {
    navigate('/review_order');

  }

  return (
    <div className='summery h-100 py-5'>
      <h5 className='h5 mb-4 text-center'>Order Summery</h5>
      <p className='px-3 small'>Seleceted items: {num} </p>
      <p className='px-3 small'>Total Prices: {price} </p>
      <p className='px-3 small'>Total Shipping Charge: ${shippingCost}</p>
      <p className='px-3 small'>Tax: $114</p>
      <h6 className='px-3'>Grand Total: ${grandTotal}</h6>
      <button className='btn mx-auto d-block mt-4 mb-3 w-75 btn-danger' onClick={handeClearCart}>

        Clear Cart
      </button>
      <button onClick={handleReviewOrder} className='btn mx-auto d-block w-75 btn-warning'>
        Review Order

      </button>
    </div>
  );
};

export default Summery;
