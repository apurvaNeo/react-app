import serviceData from "./ServiceData";
import SectionInfo from "../Section";
import { MdOutlineArrowRightAlt } from "react-icons/md";


const Services = () =>{
    return(
        <div className="services_section">
            <SectionInfo title="Our Services" discription="That are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through"/>
            <div className="container">
                <div className="row mt-5">
                {
                    serviceData.map((service)=>(
                        <div className="col-md-4" key={service.id}>
                            <div className="service_card px-3">
                                <div className="icon_wrapper rounded-circle d-flex align-items-center justify-content-center mb-3">
                                    <img src={service.image} alt={service.altText}/>
                                </div>
                                <h3 className="service_head mb-3">{service.title}</h3>
                                <p className="service_text">{service.discription}</p>
                                <a href="" className="lmore-link">{service.linkText}<MdOutlineArrowRightAlt style={{ color: '#072753', fontSize: '20px',marginLeft:'5px', }}/></a>
                            </div>
                        </div>
                ))}
                </div>
            </div>
        </div>
    )
}

export default Services;