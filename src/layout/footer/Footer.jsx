
import footerLogo from "../../assets/images/footer_logo.png";
import SocialIcons from '../../components/SocialIcons';
import { NavLink } from 'react-router-dom'


const Footer = () => {
  return (
   <div className="footer_wrapper">
      <div className="container mt-2 mb-4">
         <div className="row">
            <div className="col-md-4 fdect_1 mb-5 mb-md-0">
                <img src={footerLogo} className="mb-4" alt='footerLogo' />
                <p>On the other hand, we denounce with righteous indignation and dislike men.</p>
                <h6 className="footer_title">Interested To Work With Us</h6>
                <div className="email-group input-group mb-3">
                    <input type="text" className="form-control" placeholder="Enter your email address"/>
                    <button className="btn btn-primary" type="button">Send</button>
                </div>
            </div>
            <div className="col-md-3 offset-md-1 fsect_2 mb-5 mb-md-0">
                <h6 className="footer_title">Company</h6>
                <ul className="list-unstyled">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/work">Our Work</NavLink></li>
                    <li><NavLink to="/about">About Us</NavLink></li>
                    <li><NavLink to="/review">Review</NavLink></li>
                    <li><NavLink to="/contact">Contact Us</NavLink></li>
                </ul>
            </div>
            <div className="col-md-3 offset-md-1 fsect_3">
                <h6 className="footer_title">Reach Out to us:</h6>
                <p>Madani Ave, usa 1212</p>
                <p>+8802-55662000</p>
                <p>Email: www.uixzone12.com</p>
                <ul className="list-unstyled d-flex gap-3">
                    {SocialIcons.map((item) => {
                        const Icon = item.icon; 
                        return (
                        <li key={item.name}>
                            <a href={item.url} target="_blank" style={{color:item.color}}>
                            <Icon size={22} />
                            </a>
                        </li>
                        );
                    })}
                </ul>
            </div>
         </div>
      </div>
    </div>
  );
};

export default Footer;