import React from 'react';
import Banner from './Banner';
import Category from './Category';


const Home = () => {
    return (
        <div className='w-10/12 mx-auto'>
            <Banner></Banner>
            <Category></Category>
        </div>
    );
};

export default Home;