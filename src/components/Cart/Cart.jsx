// import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Cart = ({cart}) => {
    return (
        <div className="order-summary">
            <h2>Order Summary</h2>
            <div className="summary-content">
                <p>Selected Items: {cart.length}</p>
                <p>Total Price: $</p>
                <p>Total Shipping Charge: $</p>
                <p>Tax: $</p>
                <h3>Grand Total: $</h3>
            </div>
            <button className='clear-btn'>
                Clear Cart
                <FontAwesomeIcon style={{ marginLeft: "12px" }} icon={faTrashCan} />
            </button>
            <button className='review-btn'>
                Review Order
                <FontAwesomeIcon style={{ marginLeft: "12px" }} icon={faArrowRight} />
            </button>
        </div>
    );
};

export default Cart;