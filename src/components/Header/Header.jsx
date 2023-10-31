import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    
    return (
        <nav className="header">
            <img src={logo} />
            <div className="nav-items">
                <ActiveLink to="/">Shop</ActiveLink>
                <ActiveLink to="/orders">Order Review</ActiveLink>
                <ActiveLink to="/inventory">Inventory</ActiveLink>
                <ActiveLink to="/login">Log In</ActiveLink>
                <ActiveLink to="/signup">Sign Up</ActiveLink>
            </div>
        </nav>
    );
};

export default Header;