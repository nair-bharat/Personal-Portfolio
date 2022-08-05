import React from 'react';

import OutlinedButtons from './button';
import temp_IMG from '../images/profile/ABOUTME_IMG.png';

const AboutMe = () => {

    return(
        <div className='aboutme-section'>
            <div className='aboutme-container'>
                ABOUT ME
            </div>
            <div className='aboutme-resume'>
                <OutlinedButtons/>
            </div>
            <div className="about-container">
                <div className='flex-about1'>
                    <div className='aboutme-italic-desc'>
                        "Technology plays an increasingly vital role in people's lives nowadays; with just a single click or tap, we can do tasks that were previously impossible."  
                    </div> 
                    <div className='aboutme-italic-intro'>
                        I am an aspiring Software Developer with a keen interest in software development in general. I'm now learning Javascript, Amazon Web Services, React, and MongoDB.
                    </div>
                </div>
                <div className='flex-about2'>
                    <img src={temp_IMG} width="225px" height="340px" alt="cpp" className="temporary_IMAGE" />
                </div>
            </div>
        </div>
        
        
    );
};

export default AboutMe;
