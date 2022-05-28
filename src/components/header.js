import profile from '../images/pandas.png'
import '../resources/style.css'


const Header = () => {

    return (
        <div className="container-box">
            {/* <h1>Hey, there! I am Bharat Nair</h1> */}
            <div className='image-container'>
                <img className='profile-img' src={profile} alt="profile" />
            </div>
            <h1 className="ml10">
                <span className="text-wrapper">
                    <span className="letters">Hey, there!</span>
                </span>
            </h1> 
            <div className="text-container">
                <div className="wrapper">
                        {/* <div class="static-txt">I am</div> */}
                        <ul className="dynamic-txts">
                            <li><span>I am Bharat Nair</span></li>
                            <li><span>I am a Developer</span></li>
                            <li><span>I am Bharat Nair</span></li>
                            <li><span>I am a Developer</span></li>
                        </ul>
                </div>
            </div>

            {/* <h1 className="ml10">
                <span className="text-wrapper">
                    <span className="letters">Hey, there! I am <span className="letters_name">Bharat Nair</span></span>
                </span>
            </h1> */}
        </div>
    );
};

export default Header;