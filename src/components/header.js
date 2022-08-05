import React from 'react';

import pandas from '../images/profile/PANDA_IMG.png'
import Intro from './intro';

const Header = () => {

    return (
        <div className="header-container">
            <div className="flex-header-img">
                <img className="image-prop" src={pandas} width={200} height={200} alt="profile" />
            </div>
            <Intro />
        </div>
    );
};

export default Header;