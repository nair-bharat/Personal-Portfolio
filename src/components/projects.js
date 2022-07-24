import {Project1Link, Project1Repo} from './button';
import azure_devops from '../images/azure_devops.png';

const Project = () => {

    return(
        <div className='project-section'>
            <div>
                <h1>PROJECTS</h1>
            </div>
            <div className="project-container">
                <div className="flex-project">
                    <div className='flex-project-image'>
                        <img src={azure_devops} width="170vh" height="125vh" alt="cpp" className="skills_img_icons" />
                    </div>
                    <div className='flex-project-intro'>
                        Technology plays an increasingly vital role in people's lives nowadays; with just a single click or tap, we can do tasks that were previously impossible. I am an aspiring Software Developer with a keen interest in software development in general. I'm now studying Javascript, Amazon Web Services, React, and MongoDB.
                    </div>
                    <div className="flex-project-link">
                        <span><Project1Link /></span>
                        <span><Project1Repo /></span> 
                    </div>
                </div>
                <div className="flex-project">
                    <div>
                        <img src={azure_devops} width="170vh" height="125vh" alt="cpp" className="skills_img_icons" />
                    </div>
                    <div className='flex-project-intro'>
                        Technology plays an increasingly vital role in people's lives nowadays; with just a single click or tap, we can do tasks that were previously impossible. I am an aspiring Software Developer with a keen interest in software development in general. I'm now studying Javascript, Amazon Web Services, React, and MongoDB.
                    </div>
                    <div>
                        <span><Project1Link /></span>
                        <span><Project1Repo /></span> 
                    </div>
                </div>
                <div className="flex-project">
                    <div>
                        <img src={azure_devops} width="170vh" height="125vh" alt="cpp" className="skills_img_icons" />
                    </div>
                    <div className='flex-project-intro'>
                        Technology plays an increasingly vital role in people's lives nowadays; with just a single click or tap, we can do tasks that were previously impossible. I am an aspiring Software Developer with a keen interest in software development in general. I'm now studying Javascript, Amazon Web Services, React, and MongoDB.
                    </div>
                    <div>
                        <span><Project1Link /></span>
                        <span><Project1Repo /></span> 
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;