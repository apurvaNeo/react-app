import SectionInfo from "../Section";
import aboutImg from "../../assets/images/help.png"

const AboutUs = ()=>{
    return(
        <div className="aboutus_section">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 pe-5">
                        <SectionInfo title="We Are Hear To Help You With" discription="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer" discriptionMore="Of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself"/>
                        <div className='btn_wrapper'><button className='btn btn-primary'>Read more</button></div>
                    </div>
                    <div className="col-md-6">
                        <img src={aboutImg} className="img-fluid" alt="We Are Hear To Help You With" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;