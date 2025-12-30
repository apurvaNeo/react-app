
import { NavLink } from 'react-router-dom'
import logo from "../../assets/images/logo.png";
// import "../styles/layout/_header.scss";

const Header = () => {
  return (
      // <nav className="container mt-2 mb-4">
      //    <div className="header_wrapper d-flex align-items-center justify-content-between">
      //       <a className="navbar-brand" href="#">
      //          <div className="logo">
      //             <img src={logo} alt="Logo" />
      //          </div>
      //       </a>
      //       <button
      //          className="navbar-toggler"
      //          type="button"
      //          data-bs-toggle="collapse"
      //          data-bs-target="#navbarSupportedContent"
      //       >
      //          <span className="navbar-toggler-icon"></span>
      //       </button>
      //       <div className="collapse navbar-collapse" id="navbarSupportedContent">
      //          <nav className='nav-menu'>
      //             <ul className='d-flex py-3 mb-0 list-unstyled'>
      //                <li><NavLink to="/" end>Home</NavLink></li>
      //                <li><NavLink to="/work">Our Work</NavLink></li>
      //                <li><NavLink to="/about">About Us</NavLink></li>
      //                <li><NavLink to="/review">Review</NavLink></li>
      //                <li><NavLink to="/contact">Contact Us</NavLink></li>
      //             </ul>
      //          </nav>
      //       </div>
      //    </div>
      // </nav>
      <nav className="header_wrapper navbar navbar-expand-lg navbar-light container mt-2 mb-4">
         <div className="d-flex align-items-center justify-content-between w-100">

         <NavLink className="navbar-brand" to="/">
            <img src={logo} alt="Logo" />
         </NavLink>

         <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
         >
            <span className="navbar-toggler-icon"></span>
         </button>

         <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
               <li className="nav-item">
                  <NavLink className="nav-link" to="/" end>Home</NavLink>
               </li>
               <li className="nav-item">
                  <NavLink className="nav-link" to="/work">Our Work</NavLink>
               </li>
               <li className="nav-item">
                  <NavLink className="nav-link" to="/about">About Us</NavLink>
               </li>
               <li className="nav-item">
                  <NavLink className="nav-link" to="/review">Review</NavLink>
               </li>
               <li className="nav-item">
                  <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
               </li>
            </ul>
         </div>

         </div>
      </nav>
  );
};

export default Header;