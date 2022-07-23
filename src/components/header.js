import '../resources/style.css'
import profile_pic from '../images/profile_pic.jpeg'


const Header = () => {

    return (
        <div className="header-container">
            <div class="flex-header1">
                <div className='image-container'>
                    <img className="image-shadow" src={profile_pic} width={130} height={210} alt="profile" />
                </div>
            </div>
                <div class="flex-header2">
                    <div>
                        <h1>Hi there, I am <span class="text_name">Bharat Nair</span></h1>
                    </div>
                </div>
        </div>
    );
};

export default Header;