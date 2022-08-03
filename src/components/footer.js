import React from 'react';

import '../resources/style.css'

const Footer = () => {

    return(
        <div>
            <div className="footer-container">
                <h2>CONTACT</h2>
                <div>
                    <h2>
                        <a href="mailto:bnair624@gmail.com" className='fa fa-google'> </a>
                    </h2>
                </div>
                <h2>
                    <div id="left">
                        <a href="https://github.com/nair-bharat" className="fa fa-github"> </a>
                    </div>
                    <div id="middle">
                        <a href="https://www.linkedin.com/in/nairbharat/" className="fa fa-linkedin"> </a>
                    </div>
                    <div id="right">
                        <a href="https://www.instagram.com/_bharatnair_/" className="fa fa-instagram"> </a>
                    </div>
                </h2>
            </div>
            <div className="footer-msg">
                <h6>This website is still work in progress... Expect more content and updates!</h6>
            </div>
        </div>
    );
};

export default Footer;
