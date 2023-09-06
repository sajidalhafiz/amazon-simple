import './Header.css';
import logo from '../../images/Logo.svg';

const Header = () => {
    
    return (
        <nav className="header">
            <img src={logo} />
            <div className="nav-items">
                <a href="/shop">Shop</a>
                <a href="/orderReview">Order Review</a>
                <a href="/inventory">Inventory</a>
                <a href="/login">Login</a>
            </div>
        </nav>
    );
};

export default Header;