import profile from '../images/pandas.png'
import '../resources/style.css'


const Header = () => {

    return (
        <div className="container-box">
            <div className='image-container'>
                <img className='profile-img' src={profile} alt="profile" />
            </div>
            <h1 className="ml10">
                <span className="text-wrapper">
                    <span className="letters">Hey, there!</span>
                    <div className="text-container">
                        <div className="wrapper">
                                <ul className="dynamic-txts">
                                    <li><span>I am Bharat Nair</span></li>
                                    <li><span>I am a Developer</span></li>
                                    <li><span>I am Bharat Nair</span></li>
                                    <li><span>I am a Developer</span></li>
                                </ul>
                        </div>
                    </div>
                </span>
            </h1> 
        </div>
    );
};

export default Header;