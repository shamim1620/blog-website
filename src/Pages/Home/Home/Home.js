import React from 'react';
import useAuth from '../../../hooks/useAuth';

import Navigation from '../../Navigation/Navigation';
import Blog from '../Blog/Blog';

const Home = () => {

    return (
        <div>
            <Navigation></Navigation>
            <Blog></Blog>



        </div>
    );
};

export default Home;