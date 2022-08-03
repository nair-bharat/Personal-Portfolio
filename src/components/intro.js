import React from 'react';
import Typewriter from 'typewriter-effect';

const Intro = () => {

    return(
        <div className="flex-header-desc">
            <span>
                Hey, I am Bharat Nair
            </span>
            <div className="flex-header-desc__intro">
                <Typewriter 
                    onInit={(typewriter)=> {
                        typewriter.typeString("I am a Software Developer.").pauseFor(5000).deleteAll().typeString("Keen to learn new things.").pauseFor(5000).deleteAll().typeString("Let's connect.").start();
                        
                    }}
                />
            </div>      
        </div>  
    );
}

export default Intro;