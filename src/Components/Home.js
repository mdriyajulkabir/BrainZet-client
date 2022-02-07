import React from 'react';
import Banner from './Banner/Banner';
import Header from './Header/Header';
import MoreDestination from './MoreDestination/MoreDestination';
import TopDestination from './TopDestination/TopDestination';

const Home = () => {
    return (
        <div>
            <Header/>
            <Banner/>
            <TopDestination/>
            <MoreDestination/>
        </div>
    );
};

export default Home;