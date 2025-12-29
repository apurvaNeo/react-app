import Header from '../layout/header/Header';

const ContactPage = ()=>{
    return(
        <div>
            <div className='Top_section'>
                <Header/>
            </div>
            <div className='contactus_wrapper'>
                <div className="container my-4 banner_section">
                    
                    <div className='contact_form'>
                        <div className='row'>
                            <div className='col-md-8 mx-auto'>
                                <div className='Section_heading mb-4'>
                                    <h2>Contct Us</h2>
                                </div>
                                <div className='form-group'>
                                    <label>Name</label>
                                    <input type='text' placeholder="Name" className='form-control'/>
                                </div>
                                <div className='form-group'>
                                    <label>Email</label>
                                    <input type='email' placeholder="Email" className='form-control'/>
                                </div>
                                <div className='form-group'>
                                    <label>Name</label>
                                    <input type='text' placeholder="Mobile" className='form-control'/>
                                </div>
                                <div className='form-group'>
                                    <label for="city">City</label>
                                    <select id="city" name="city">
                                        <option value="mumbai">Mumbai</option>
                                        <option value="pune">Pune</option>
                                        <option value="nashik">Nashik</option>
                                        <option value="sambhajinagar">SambhajiNagar</option>
                                    </select>
                                </div>
                                <div className='btn_wrapper mt-3 d-flex justify-content-end'><button className='btn btn-primary' type='submit'>Submit</button></div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            
        </div>
    )
}
export default ContactPage;