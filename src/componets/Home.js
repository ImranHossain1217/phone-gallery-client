import React from 'react';
import About from './About';
import Banner from './Banner';
import Category from './Category';


const Home = () => {
    return (
        <div className='w-10/12 mx-auto'>
            <Banner></Banner>
            <Category></Category>
            <About></About>
        </div>
    );
};

export default Home;