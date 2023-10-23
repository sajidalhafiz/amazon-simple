import React from 'react';
import './OrderedItem.css'
import { BsTrash } from "react-icons/bs";

const OrderedItem = ({ item, handleItemRemove }) => {
    const { id, img, name, price, shipping } = item;

    console.log(img, name, price, shipping)

    return (
        <div className='item'>
            <div className='item-left'>
                <div className='item-img'>
                    <img src={img} alt="" />
                </div>
                <div className='item-content'>
                    <h2 className='title'>{name}</h2>
                    <p>Price: <span>${price}</span></p>
                    <p>Shipping: <span>${shipping}</span></p>
                </div>
            </div>
            <div className='item-remove' onClick={() => handleItemRemove(id)}>
                <BsTrash />
            </div>
        </div>
    );
};

export default OrderedItem;