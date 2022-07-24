import OutlinedButtons from './button';
import '../resources/style.css';

const AboutMe = () => {

    return(
        <div>
            <div>
                <h1>About Me</h1>
            </div>
            <OutlinedButtons/>
            <div className="about-container">
                <div className='flex-about1'>
                    Technology plays an increasingly vital role in people's lives nowadays; with just a single click or tap, we can do tasks that were previously impossible. I am an aspiring Software Developer with a keen interest in software development in general. I'm now studying Javascript, Amazon Web Services, React, and MongoDB.
                </div>
                <div className='flex-about2'>
                    Technology plays an increasingly vital role in people's lives nowadays; with just a single click or tap, we can do tasks that were previously impossible. I am an aspiring Software Developer with a keen interest in software development in general. I'm now studying Javascript, Amazon Web Services, React, and MongoDB.
                </div>
            </div>
        </div>
        
        
    );
};

export default AboutMe;
