import {Project1Link, Project1Repo, Project2Link, Project2Repo, Project3Link, Project3Repo} from './button';
import PROJECT_1 from '../images/projects/PROJECT_1.png';
import PROJECT_2 from '../images/projects/PROJECT_2.png';
import PROJECT_3 from '../images/projects/PROJECT_3.png';

const Project = () => {

    return(
        <div className='project-section'>
            <div>
                <h2>PROJECTS</h2>
            </div>
            <div className="project-container">
                <div className="flex-project">
                    <div className='flex-project-image'>
                        <img src={PROJECT_1} width="170vh" height="125vh" alt="cpp" className="skills_img_icons" />
                    </div>
                    <div className='flex-project-intro__heading'>
                        The Furniture Hub
                    </div>
                    <div className='flex-project-intro'>
                        An Ecommerce app to buy furniture items. The user can add and remove the items in the cart, the total cost is calculated based on the no of items added and the user can proceed to checkout.
                    </div>
                    <div className="flex-project-link">
                        <span><Project1Link /></span>
                        <span><Project1Repo /></span> 
                    </div>
                </div>
                <div className="flex-project">
                    <div>
                        <img src={PROJECT_2} width="170vh" height="125vh" alt="cpp" className="skills_img_icons" />
                    </div>
                    <div className='flex-project-intro__heading'>
                        Standard Calculator
                    </div>
                    <div className='flex-project-intro'>
                        A standard calculator which can perform basic operation like addition, subtraction, division, multiplication and some additional functionalities using HTML, CSS &amp; Vanilla JS.
                    </div>
                    <div>
                        <span><Project2Link /></span>
                        <span><Project2Repo /></span> 
                    </div>
                </div>
                <div className="flex-project">
                    <div>
                        <img src={PROJECT_3} width="140vh" height="125vh" alt="cpp" className="skills_img_icons" />
                    </div>
                    <div className='flex-project-intro__heading'>
                        Analog Clock using JS
                    </div>
                    <div className='flex-project-intro'>
                        An analog clock which displays the current time of the day using HTML, CSS &amp; Vanilla JS. The future scope of the project is to add a digital clock which will be displayed along with the analog clock.
                    </div>
                    <div>
                        <span><Project3Link /></span>
                        <span><Project3Repo /></span> 
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;