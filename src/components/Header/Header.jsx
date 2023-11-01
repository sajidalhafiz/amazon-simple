import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const Header = () => {
    const {user, logOut} = useContext(AuthContext);

    const handleLogOut = () => {
        logOut().then(console.log("you are logged out."))
    }
    return (
        <nav className="header">
            <img src={logo} />
            <div className="nav-items">
                <ActiveLink to="/">Shop</ActiveLink>
                <ActiveLink to="/orders">Order Review</ActiveLink>
                <ActiveLink to="/inventory">Inventory</ActiveLink>
                {
                    user ? <button onClick={handleLogOut} className='review-btn'>Sign Out</button>
                        : <>
                            <ActiveLink to="/login"><button onClick={handleLogOut} className='review-btn'>Log In</button></ActiveLink>
                            <ActiveLink to="/signup"><button onClick={handleLogOut} className='review-btn'>Sign Up</button></ActiveLink>
                        </>
                }
            </div>
        </nav>
    );
};

export default Header;