import Header from '../layout/header/Header';
import Footer from '../layout/footer/Footer';

import React,{useState,useEffect} from 'react';
//read route parameter from url and change route
import { useParams, useNavigate } from "react-router-dom";

const ReviewPage = ()=>{
    const [users,setUser] = useState([]);
    const { id } = useParams(); // reads id from route
    const navigate = useNavigate();
    // read id from URL
    useEffect(() => {
        console.log("Route ID:", id);
    }, [id]);


    useEffect(()=>{
        
        const fetchUser = async()=>{
            try{
                const response = await fetch ("https://jsonplaceholder.typicode.com/users");
                const data = await response.json();
                setUser(data);
            }
            catch(error){
                console.error('Error:',error);
            }
        }
        fetchUser();
    },[]);

    // FILTER USING URL PARAM
    const filteredUsers = id
    ? users.filter(user => user.id === Number(id))
    : users;
    // const filterId = users.filter(user => user.id === Number(id));
    // console.log(filterId);

    return(
        <div>
            <div className='Top_section'>
                <Header/>
            </div>
            <div className='container'>
                <div className='Section_heading mt-5 mb-4'>
                    <h2>API Integration</h2>
                    
                </div>
                <div className='table_wrapper'>
                    <div className='table-responsive'>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Website</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredUsers.map((user)=>{
                                    return(
                                        <tr key={user.id} style={{ cursor: "pointer" }} 
                                        onClick={() => navigate(`/review/${user.id}`)}>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td>{user.phone}</td>
                                            <td>{user.website}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default ReviewPage;