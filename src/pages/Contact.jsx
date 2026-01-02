import Header from '../layout/header/Header';
import Footer from '../layout/footer/Footer';

import { useState } from 'react';
const ContactPage = ()=>{

    const[userdata,setUserdata] = useState({
        name:"",
        email:"",
        mobile:"",
        city:"",
    });
    // console.log(userdata);

    const [submittedData,setSubmitteddata]=useState();
    const [errors, setErrors] = useState({});

    //onclick of button
    const handleSubmit=(event)=>{
        //adding this to avoid page refresh
        event.preventDefault();
        // console.log(userdata);
        // setSubmitteddata(userdata);
        if (userValidate()) {
            setSubmitteddata(userdata);
        }
    };


    //onchange of the input field
    const handleChange =(event)=>{
        // console.log(event.target.name,event.target.value);
        setUserdata({...userdata,
            [event.target.name]: event.target.value});
    }

    //form fields validation
    const userValidate = () => {
        let userErrors = {};

        if (!userdata.name.trim()) {
            userErrors.name = "Name is required";
        }

        if (!userdata.email) {
            userErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userdata.email)) {
            userErrors.email = "Invalid email format";
        }

        if (!userdata.mobile) {
            userErrors.mobile = "Mobile number is required";
        } else if (!/^\d{10}$/.test(userdata.mobile)) {
            userErrors.mobile = "Mobile must be 10 digits";
        }

        if (!userdata.city) {
            userErrors.city = "Please select a city";
        }
        setErrors(userErrors);

        return Object.keys(userErrors).length === 0;
    };



    return(
        <div>
            <div className='Top_section'>
                <Header/>
            </div>
            <div className='contactus_wrapper'>
                <div className="container my-4 banner_section">
                    
                    <div className='contact_form mb-5'>
                        <div className='row'>
                            <div className='col-md-8 mx-auto'>
                                <div className='Section_heading mb-4'>
                                    <h2>Contct Us</h2>
                                </div>
                                <form>
                                    <div className='form-group'>
                                        <label>Name</label>
                                        <input type='text' onChange={handleChange} value={userdata.name} name="name"  placeholder="Apurva Joshi" className='form-control'/>
                                        {errors.name && <small className="text-danger">{errors.name}</small>}
                                    </div>
                                    <div className='form-group'>
                                        <label>Email</label>
                                        <input type='email' onChange={handleChange} name="email" value={userdata.email} placeholder="apurva.joshi@neosoftmail.com" className='form-control'/>
                                        {errors.email && <small className="text-danger">{errors.email}</small>}
                                        
                                    </div>
                                    <div className='form-group'>
                                        <label>Mobile</label>
                                        <input type='text' onChange={handleChange} name="mobile" value={userdata.mobile} placeholder="9960520424" className='form-control'/>
                                        {errors.mobile && <small className="text-danger">{errors.mobile}</small>}
                                    </div>
                                    <div className='form-group'>
                                        <label htmlFor="city">City</label>
                                        <select id="city" onChange={handleChange} name="city" value={userdata.city} className='form-control'>
                                            <option value="" disabled>Pune</option>
                                            <option value="mumbai">Mumbai</option>
                                            <option value="pune">Pune</option>
                                            <option value="nashik">Nashik</option>
                                            <option value="sambhajinagar">SambhajiNagar</option>
                                        </select>
                                        {errors.city && <small className="text-danger">{errors.city}</small>}
                                    </div>
                                    <div className='btn_wrapper mt-3 d-flex justify-content-end'>
                                        <button className='btn btn-primary' onClick={handleSubmit} type='submit'>Submit</button>
                                    </div>
                                </form>
                                {submittedData && (
                                    <div className="mt-4">
                                    <h5 className='mb-4'>Form's Submission Data</h5>
                                    <p><strong>Name:</strong> {submittedData.name}</p>
                                    <p><strong>Email:</strong> {submittedData.email}</p>
                                    <p><strong>Mobile:</strong> {submittedData.mobile}</p>
                                    <p><strong>City:</strong> {submittedData.city}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default ContactPage;