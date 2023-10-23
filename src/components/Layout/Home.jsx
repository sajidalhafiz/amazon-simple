import React from 'react';
import Header from '../Header/Header';
import { Outlet, useNavigation } from 'react-router-dom';
import Login from '../Login/Login';

const Home = () => {
    const navigation = useNavigation();

    return (
        <div>
            <Header></Header>
            <div className={navigation.state === 'loading' ? 'loading...' : ''}>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Home;