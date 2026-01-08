import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../layout/header/Header";
import Footer from "../layout/footer/Footer";

const ReviewDetails = () => {
    //read id from url
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchUser();
  }, [id]);

  
    if (!user) {
    return <p className="text-center mt-5">Loading...</p>;
    }

  return (
    <>
      <div className="Top_section">
        <Header />
      </div>

      <div className="container mt-5">
        <div className='Section_heading mt-5 mb-3 d-flex'>
            <button className="btn btn-secondary mb-3" onClick={() => navigate(-1)}> ← Back</button>
            <h3 className="ms-3">User Details</h3>
        </div>
        
        <ul className="review_details list-unstyled mb-4">
          <li className="">
            <b>Name:</b> {user.name}
          </li>
          <li className="">
            <b>Email:</b> {user.email}
          </li>
          <li className="">
            <b>Phone:</b> {user.phone}
          </li>
          <li className="">
            <b>Website:</b> {user.website}
          </li>
          <li className="">
            <b>Company:</b> {user.company.name}
          </li>
          <li className="">
            <b>City:</b> {user.address.city}
          </li>
        </ul>
      </div>

      <Footer />
    </>
  );
};

export default ReviewDetails;
