import { useState } from 'react';
import './Shop.css';
import { useEffect } from 'react';
import Product from '../Product/Product';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    // const handleAddToCart = (product) => {
    //     console.log(product);
    // }
    const handleAddToCart = (product) => {
        let newCart = [...cart, product];
        setCart(newCart);
    };

    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    >
                    </Product>)
                }
            </div>
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
                    <FontAwesomeIcon style={{marginLeft:"12px"}} icon={faTrashCan} />
                </button>
                <button className='review-btn'>
                    Review Order
                    <FontAwesomeIcon style={{marginLeft:"12px"}} icon={faArrowRight} />
                </button>
            </div>
        </div>
    );
};

export default Shop;