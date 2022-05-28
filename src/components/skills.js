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
                <img src={cpp_icon} width={50} height={50} alt="cpp" className="skills_img_icons" />
                <img src={c_icon} width={50} height={50} alt="c_icon" className="skills_img_icons" />
                <img src={git_icon} width={120} height={50} alt="git_icon" className="skills_img_icons" />
                <img src={js_icon} width={50} height={50} alt="js_icon" className="skills_img_icons" />
                <img src={react_icon} width={70} height={50} alt="react_icon" className="skills_img_icons" />
                <img src={azure_devops} width={100} height={50} alt="azure_devops" className="skills_img_icons" />
                <img src={apache_airflow} width={120} height={50} alt="apache_airflow" className="skills_img_icons" />
            </div>
            
        </div>
    );
};

export default Skills;