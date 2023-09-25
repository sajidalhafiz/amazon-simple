import { useState } from 'react';
import './Shop.css';
import { useEffect } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';


const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    useEffect(() => {
        // step 1: get shopping cart
        const storedCart = getShoppingCart();
        const savedCart = [];

        for(const id in storedCart){
            // step 2: find product
            const addedProduct = products.find(product => product.id === id)
            if(addedProduct){
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
    } ,[products])

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
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    >
                    </Product>)
                }
            </div>
            <div style={{ position: "sticky" }}>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;