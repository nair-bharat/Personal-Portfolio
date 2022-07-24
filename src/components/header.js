import '../resources/style.css'
/* import profile_pic from '../images/profile_pic.jpeg' */
import pandas from '../images/pandas.png'

const Header = () => {

    return (
        <div className="header-container">
            <div class="flex-header-img">
                <div className='image-container'>
                    <img className="image-prop" src={pandas} width={200} height={200} alt="profile" />
                </div>
            </div>
                <div class="flex-header-desc">
                    <div>
                        <h1>Hi there, <br/> I am <span class="text_name">Bharat Nair</span></h1>
                    </div>
                </div>
        </div>
    );
};

export default Header;