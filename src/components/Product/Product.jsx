import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    const { name, seller, price, ratings, img } = props.product;

    const handleAddToCart = props.handleAddToCart;

    return (
        <div className='product-card'>
            <img src={img} alt="" />
            <div className="card-content">
                <h4>{name}</h4>
                <h4>Price: ${price}</h4>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings} star</p>
            </div>
            <button onClick={() => handleAddToCart(props.product)}>
                Add to Cart
                <FontAwesomeIcon style={{marginLeft:"12px"}} icon={faCartPlus} />
            </button>
        </div>
    );
};

export default Product;