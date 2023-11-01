import React, { useContext } from 'react';
import { AuthContext } from '../components/providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import './PrivateRoutes.css';

const PrivateRoutes = ({children}) => {
    const {user, loading } = useContext(AuthContext);
    let location = useLocation();
    // console.log(location)

    if(loading){
        return <div className='loading'>
            <h3>Loading...</h3>
        </div>;
    }
    if(user){
        return children;
    }
    return <Navigate to='/login' state={{from: location}} replace={true}/>
};

export default PrivateRoutes;