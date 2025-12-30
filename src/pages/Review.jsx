import Header from '../layout/header/Header';
import Footer from '../layout/footer/Footer';
import React,{useState,useEffect} from 'react';


const ReviewPage = ()=>{
    const [users,setUser] = useState([]);
    const [search,setSearch] = useState('');
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => setUser(data))
        .catch(error => console.error('Error:', error));
    },[]);

    return(
        <div>
            <div className='Top_section'>
                <Header/>
            </div>
            <div className='container'>
                <div className='table_wrapper'>
                    <h5 className='mb-3'>API Integration</h5>
                    <div className='row d-flex justify-content-end'>
                        <div className='col-md-5'>
                            <div className='form-group mb-3'>
                                <input type="text" placeholder='search by Name' className='form-control' value={search} onChange={(e)=>setSearch(e.target.value)} />
                            </div>
                        </div>
                    </div>
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
                                {users.map((user)=>{
                                    return(
                                        <tr key={user.id}>
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