import React from 'react';
import Typewriter from 'typewriter-effect';

const Intro = () => {

    return(
        <div className="flex-header-desc">
            <span>
                Hey, I am <span className="flex-header-desc__name">Bharat Nair</span>
            </span>
            <div className="flex-header-desc__intro">
                <Typewriter 
                    onInit={(typewriter)=> {
                        typewriter.typeString("Software Developer.").pauseFor(5000).deleteAll().typeString("Music Lover.").pauseFor(5000).deleteAll().typeString("Tech Enthusiast.").pauseFor(5000).deleteAll().typeString("Let's connect.").start();
                        
                    }}
                />
            </div>      
        </div>  
    );
}

export default Intro;