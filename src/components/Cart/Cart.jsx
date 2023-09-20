// import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Cart = ({cart}) => {
    console.log(cart)
    
    let totalPrice = 0;
    let totalShipping = 0;

    for(const product of cart){
        totalPrice += product.price;
        totalShipping += product.shipping;
    }

    const tax = totalPrice*5/100;
    const grandTotal = totalPrice + totalShipping + tax;

    return (
        <div className="order-summary">
            <h2>Order Summary</h2>
            <div className="summary-content">
                <p>Selected Items: {cart.length}</p>
                <p>Total Price: ${totalPrice}</p>
                <p>Total Shipping Charge: ${totalShipping}</p>
                <p>Tax: ${tax.toFixed(2)}</p>
                <h3>Grand Total: ${grandTotal.toFixed(2)}</h3>
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