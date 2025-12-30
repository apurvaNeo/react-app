import ProjectData from "./ProjectData";
import SectionInfo from "../Section";
import { MdOutlineArrowRightAlt } from "react-icons/md";

const Projects = () =>{
    return(
        <div className="projects_section">
            <div className="container">
                <SectionInfo title="Our Latest Project" discription="To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage But who has any right"/>
                <div className="row">
                    {
                        ProjectData.map((project)=>(
                            <div className="col-md-4 project_card mb-5 mb-md-0" key={project.id}>
                                <div className="img_wrapper mb-3">
                                    <img src={project.image} className="img-fluid" alt={project.altText}/>
                                </div>
                                <h3 className="project_head mb-3">{project.title}</h3>
                                <p className="project_text">{project.discription}</p>
                                <a href="" className="lmore-link">{project.linkText}<MdOutlineArrowRightAlt style={{ color: '#FF9C00', fontSize: '20px',marginLeft:'5px', }}/></a>
                            </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects;