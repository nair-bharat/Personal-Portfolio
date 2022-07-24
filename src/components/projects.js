import OutlinedButtons from './button';
import azure_devops from '../images/azure_devops.png';

const Project = () => {

    return(
        <div>
            <div>
                <h1>Projects</h1>
            </div>
            <div class="project-container">
                <div class="flex-project1">
                    <img src={azure_devops} width={400} height={200} alt="cpp" className="skills_img_icons" /><br/>
                    Technology plays an increasingly vital role in people's lives nowadays; with just a single click or tap, we can do tasks that were previously impossible. I am an aspiring Software Developer with a keen interest in software development in general. I'm now studying Javascript, Amazon Web Services, React, and MongoDB.
                    <br />
                    <OutlinedButtons /><OutlinedButtons />
                </div>
                <div class="flex-project2">
                    <img src={azure_devops} width={400} height={200} alt="cpp" className="skills_img_icons" /><br/>
                    Technology plays an increasingly vital role in people's lives nowadays; with just a single click or tap, we can do tasks that were previously impossible. I am an aspiring Software Developer with a keen interest in software development in general. I'm now studying Javascript, Amazon Web Services, React, and MongoDB.
                    <br />
                    <OutlinedButtons /><OutlinedButtons />
                </div>
            </div>
        </div>
    );
}

export default Project;