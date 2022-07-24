import OutlinedButtons from './button';
import temp_IMG from '../images/tempImg.jpg';
import '../resources/style.css';

const AboutMe = () => {

    return(
        <div className='aboutme-section'>
            <div className='aboutme-container'>
                <h1>About Me</h1>
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
                        I am an aspiring Software Developer with a keen interest in software development in general. I'm now studying Javascript, Amazon Web Services, React, and MongoDB.
                    </div>
                </div>
                <div className='flex-about2'>
                    <img src={temp_IMG} width={300} height={500} alt="cpp" className="temporary_IMAGE" />
                </div>
            </div>
        </div>
        
        
    );
};

export default AboutMe;
