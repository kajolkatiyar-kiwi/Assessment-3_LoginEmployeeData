import React, { useState } from 'react'
import axios from 'axios'
import '../styles/AddItem.css'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'

const AddItem = () => {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const header = {"Access-Control-Allow-Origin": "*"};

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://63dcf998df83d549ce97a7ea.mockapi.io/empD', {
            name:name,
            email:email,
            phone:phone,
            header
        }
        )
        .then(() =>{
            navigate("/userList");
        })
        
        // setName('');
        // setEmail('');
    }

    return (
        <>
        <Link to='/'>
        <button className='button sideL' type="submit">Back to Login-Page</button>
           </Link>
        <Link to='/userList'>
        
            <button className='button sideR' type="submit">Back to Employee-Details</button>
            </Link>
        <div className='container'>
       <form className="form" onSubmit={handleSubmit}>
      <label className="label">
        Name:  </label>         
        <input className="input" type="text" value={name} onChange={(e) => setName(e.target.value)} />
      
      <label className="label">
        Email:</label>
        <input className="input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      
      <label className="label">
        Contact:</label>
        <input className="input" type="number" value={phone} onChange={(e) => setPhone(e.target.value)} />
      
      <button className='button' type="submit" onClick={handleSubmit}>Submit</button>
      
    </form>
        </div>
        </>
        
    )
}

export default AddItem