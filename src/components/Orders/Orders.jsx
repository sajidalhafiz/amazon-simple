import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import OrderedItem from '../OrderedItem/OrderedItem';
import './Orders.css'
import { removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
    const savedCart = useLoaderData();
    const [cart, setCart] = useState(savedCart);

    const handleItemRemove = id => {
        const remainingCart = cart.filter(item => item.id !== id);
        setCart(remainingCart);
        removeFromDb(id)
    }

    return (
        <div className='orders-container'>
            <div className='items'>
                {
                    cart.map(item => <OrderedItem
                        key={item.id}
                        item={item}
                        handleItemRemove={handleItemRemove}
                    ></OrderedItem>)
                }
            </div>
            <div>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;