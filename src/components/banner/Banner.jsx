import banner from "../../assets/images/banner.png";
const Banner = () => {
  return (
    <div className="container my-4 banner_section">
        <div className="row">
            <div className="col-md-7 d-flex align-items-center px-5">
                <div className="banner_wrapper">
                    <h2 className="mb-4 banner_title">We Build Brands That Lead & Inspire</h2>
                    <p className="banner_text mb-3 d-inline-block w-100">On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble</p>
                    <div className='btn_wrapper mt-3'><button className='btn btn-primary'>Read more</button></div>
                </div>
            </div>
            <div className="col-md-5">
                <img src={banner} className="img-fluid" alt="Banner" />
            </div>
        </div>
        
    </div>
  );
};

export default Banner;