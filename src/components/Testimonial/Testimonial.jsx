import React from 'react';
import {useState, useEffect} from 'react'
import "./Testimonial.css";
import axios from 'axios';

const Testimonial = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const getUsers = async () => {
    try {
      setLoading(true)
      let res = await axios.get("https://jsonplaceholder.typicode.com/users");
      setUsers(res.data);
      setLoading(false);
      console.log(res.data);
    } catch (error) {
      console.log(error);
      setLoading(false);
    };
  }
  useEffect( () => {
    getUsers();
  }, []);
 return (
    <div>
      {/* <!--TESTIMONY--> */}
      <section id="testimonials">
        
        <h4>TESTIMONIALS</h4>
        <h2>What our customers says</h2>

        <div className="testimonials-container">
          {users.map((user) => (
            <div className="card" key={user.id}>
              <img src="./jean jacket.jpg" alt="image" />
              <h3>{user.name}</h3>
              <h4> Username: {user.username} </h4>
              <h4>Address: {user.address.street}, {user.address.city},</h4>
              <h4>Company: {user.company.name}</h4>
              <p>
                "Absolutely love my jean jeacket! The quality is amazing, its fits
                perfectly, <br />
                and it looks even better in person. Definitely worth every penny!
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}

export default Testimonial

