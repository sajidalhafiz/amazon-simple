import './Product.css';

const Product = (props) => {
    const { name, seller, price, ratings, img } = props.product;
    return (
        <div className='product-card'>
            <img src={img} alt="" />
            <div className="card-content">
                <h4>{name}</h4>
                <h4>Price: ${price}</h4>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings} star</p>
            </div>
            <button>Add to Cart</button>
        </div>
    );
};

export default Product;