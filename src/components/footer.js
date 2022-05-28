import '../resources/style.css'

const Footer = () => {

    return(
        
        <div>
            
            <div className="container-box">
                <h1>Contact</h1>
                <div id="left">
                    <a href = "https://github.com/nair-bharat" className="fa fa-github"> </a>
                </div>
                <div id="middle">
                    <a href = "https://www.linkedin.com/in/nairbharat/" className="fa fa-linkedin"> </a>
                </div>
                <div id="right">
                    <a href = "https://www.instagram.com/_bharatnair_/" className="fa fa-instagram"> </a>
                </div>
            </div>
            <div className="footer-bottom">
                <h6>&copy;{new Date().getFullYear()} No rights reserved, feel free to copy</h6>
            </div>
        </div>
    );
};

export default Footer;
