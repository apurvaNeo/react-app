

import { useState } from 'react';
import logo from "../assets/images/logo.png";
import { useNavigate } from 'react-router-dom';
import { useAuth } from "./AuthContext";


const LoginPage = ()=>{
    const[userName,setUsername]= useState('');
    const[password,setPassword]= useState('');
    const [error,setError]=useState('');
    const navigate = useNavigate();
    // console.log(userName,password);
    const{login} = useAuth();
    
    const handleSubmit=(e)=>{
        e.preventDefault();

        if(!userName || !password){
            setError("Please add the details.");
            return;
        }
        if(userName==="admin" && password ==="admin@123"){
            login({role:'admin'});
            navigate("/home");
        }

        else if(userName==="user" && password ==="user@123"){
            login({role:'user'});
            navigate("/home");
        }
        else{
            setError("Enter valid Credentials.")
        }
    }
    return(
        <div>
            <div className='contactus_wrapper login_wrapper'>
                <div className="container my-4 banner_section">
                    <div className='contact_form mb-5'>
                        <div className='row'>
                            <div className='col-md-4 mx-auto'>
                                
                                <div className='Section_heading text-center mb-4'>
                                    <img src ={logo} alt="logo" className='mb-4'/>
                              
                                </div>
                                <form onSubmit={handleSubmit}>
                                    <div className='form-group mb-3'>
                                        <label className='text-white'>Username</label>
                                        <input type='text' value={userName} onChange={(e)=>setUsername(e.target.value)}  name="name"  placeholder="ApurvaJ123" className='form-control'/>
                                    </div>
                                    {error && <p style={{ color: "red" }} className='mb-2'>{error}</p>}
                                    <div className='form-group mb-3'>
                                        <label className='text-white'>Password</label>
                                        <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} name="password" placeholder="password" className='form-control'/>
                                    </div>
                                    {error && <p style={{ color: "red" }} className='mb-2'>{error}</p>}

                                    <div className='btn_wrapper mt-3 d-flex justify-content-center'>
                                        <button className='btn btn-primary' type='submit'>Login</button>
                                    </div>
                                </form>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
export default LoginPage;