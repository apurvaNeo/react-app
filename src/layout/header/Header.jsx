
import { NavLink } from 'react-router-dom'
import logo from "../../assets/images/logo.png";
// import "../styles/layout/_header.scss";

const Header = () => {
  return (
   
      <div className="container mt-2 mb-4">
         <div className="header_wrapper d-flex align-items-center justify-content-between">
            <div className="logo">
               <img src={logo} alt="Logo" />
            </div>

            <nav className='nav-menu'>
               <ul className='d-flex py-3 mb-0 list-unstyled'>
                  <li><NavLink to="/" end>Home</NavLink></li>
                  <li><NavLink to="/work">Our Work</NavLink></li>
                  <li><NavLink to="/about">About Us</NavLink></li>
                  <li><NavLink to="/review">Review</NavLink></li>
                  <li><NavLink to="/contact">Contact Us</NavLink></li>
               </ul>
            </nav>
            
         </div>
      </div>

  );
};

export default Header;