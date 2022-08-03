import React from 'react';

import '../resources/style.css'
import pandas from '../images/pandas.png'
import Intro from './intro';

const Header = () => {

    return (
        <div className="header-container">
            <div className="flex-header-img">
                <div className='image-container'>
                    <img className="image-prop" src={pandas} width={200} height={200} alt="profile" />
                </div>
            </div>
            <Intro />
        </div>
    );
};

export default Header;