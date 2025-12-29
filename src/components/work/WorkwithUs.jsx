import SectionInfo from "../Section";
import workImg from "../../assets/images/work.png"

const WorkWithUs = () => {
    return(
        <div className="workwithus_wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src={workImg} className="img-fluid" alt="Interested To Work With Us?" />
                    </div>
                    <div className="col-md-6 ps-5 workus_text">
                        <SectionInfo title="Interested To Work With Us?" discription="Because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain " discriptionMore="Of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure"/>
                        <div className='btn_wrapper'><button className='btn btn-primary'>Read more</button></div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default WorkWithUs;