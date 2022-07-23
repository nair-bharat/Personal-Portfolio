import cpp_icon from '../images/cpp_icon2.png';
import git_icon from '../images/git_icon.png';
import c_icon from '../images/c_icon.png';
import js_icon from '../images/js_icon.png';
import react_icon from '../images/react_icon.png';
import azure_devops from '../images/azure_devops.png';
import apache_airflow from '../images/apache_airflow.png';
import '../resources/style.css'

const Skills = () => {

    return(

        <div className="container-box">
            <h1>Skills</h1>
            <div className="skills_icons">
                <div>
                    <img src={cpp_icon} width={75} height={75} alt="cpp" className="skills_img_icons" />
                </div>
                <div>
                    <img src={c_icon} width={75} height={75} alt="c_icon" className="skills_img_icons" />
                </div>
                <div>
                    <img src={git_icon} width={150} height={75} alt="git_icon" className="skills_img_icons" />
                </div>
                <div>
                    <img src={js_icon} width={60} height={75} alt="js_icon" className="skills_img_icons" />
                </div>
                <div>
                    <img src={react_icon} width={75} height={75} alt="react_icon" className="skills_img_icons" />
                </div>
            </div>
            
        </div>
    );
};

export default Skills;