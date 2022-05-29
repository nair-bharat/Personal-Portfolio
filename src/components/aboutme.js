import '../resources/style.css'
import profile_pic from '../images/profile_pic.jpeg'
import OutlinedButtons from './button';

const AboutMe = () => {

    return(
        <div className="container-box">
            <OutlinedButtons/>
            <div>
                <h1>About Me</h1>
            </div>
            <div>
                Technology plays an increasingly vital role in people's lives nowadays; with just a single click or tap, we can do tasks that were previously impossible. I am an aspiring Software Developer with a keen interest in software development in general. I'm now studying Javascript, Amazon Web Services, React, and MongoDB.
            </div>
        </div>
        
    );
};

export default AboutMe;
