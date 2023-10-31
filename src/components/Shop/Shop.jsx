import { useState } from 'react';
import './Shop.css';
import { useEffect } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


const Shop = () => {
    const [products, setProducts] = useState([]);
    const [isShow, setIsShow] = useState(true);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    useEffect(() => {
        // step 1: get shopping cart
        const storedCart = getShoppingCart();
        const savedCart = [];

        for (const id in storedCart) {
            // step 2: find product
            const addedProduct = products.find(product => product.id === id)
            if (addedProduct) {
                // step 3: set quantity
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                // step 4: add the added product to savedCart
                savedCart.push(addedProduct);
            }
            // console.log(addedProduct)
        }
        // step 5: set the savedCart to DB
        setCart(savedCart)
    }, [products])

    // const handleAddToCart = (product) => {
    //     console.log(product);
    // }
    const handleAddToCart = (product) => {
        let newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id)
    };

    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.slice(0, isShow ? 16 : products.length).map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    >
                    </Product>)
                }
                {isShow && <button className='review-btn' onClick={() => setIsShow(false)}>See All Products</button>}
            </div>
            <div style={{ position: "sticky" }}>
                <Cart cart={cart}>
                    <Link className='review-btn-link' to='/orders'>
                        <button className='review-btn'>
                            Review Order
                            <FontAwesomeIcon style={{ marginLeft: "12px" }} icon={faArrowRight} />
                        </button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;