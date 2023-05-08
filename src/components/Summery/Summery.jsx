import { useContext } from 'react';
import './Summery.css';
import { AuthContext } from '../Provider/Provider';



const Summery = () => {

    const {num, price} = useContext(AuthContext);


  return (
    <div className='summery h-100 py-5'>
      <h5 className='h5 mb-4 text-center'>Order Summery</h5>
      <p className='px-3 small'>Seleceted items: {num} </p>
      <p className='px-3 small'>Total Prices: {price} </p>
      <p className='px-3 small'>Total Shipping Charge: $5</p>
      <p className='px-3 small'>Tax: $114</p>
      <h6 className='px-3'>Grand Total: $1559</h6>
      <button className='btn mx-auto d-block mt-4 mb-3 w-75 btn-danger'>
       
        Clear Cart
      </button>
      <button className='btn mx-auto d-block w-75 btn-warning'>
        Review Order
       
      </button>
    </div>
  );
};

export default Summery;
