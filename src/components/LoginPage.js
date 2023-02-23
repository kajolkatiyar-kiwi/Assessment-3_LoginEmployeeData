import React, { useState } from 'react';
import '../styles/LoginPage.css'
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  
  const [email, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState('');

  const handleLogin = () => {
    if(email === 'aditya.tripathi@testmail.com' && password === 'password123'){
      navigate("/userList");
    }else{
      if(!email || !password){
        alert('All fields are required');
      }else{
        alert('Invalid credentials! Please try again.')
      }
    }
  };

  return (
    <div>
      <section className="text-center">
      <div className="p-5 bg-image" style={{
          backgroundImage: "url('https://mdbootstrap.com/img/new/textures/full/171.jpg')",
          height: "300px"
          }}></div>
          <div className="card mx-4 mx-md-5 shadow-5-strong" style={{
          marginTop: "-100px",
          background: "hsla(0, 0%, 100%, 0.8)",
          backdropFilter: "blur(30px)"}}
          >
            <div className="card-body py-5 px-md-5">

                <div className="row d-flex justify-content-center">
                    <div className="col-lg-8">
                        <h2 className="fw-bold mb-5">Log In. Now!</h2>
                        <form>
                            <div className="form-outline mb-4">
                                <input type="email" id="form3Example3" className="form-control" value={email} onChange={(e) => setUsername(e.target.value)} />
                                <label className="form-label" for="form3Example3">Email address</label>
                            </div>

                            <div className="form-outline mb-4">
                                <input type="password" id="form3Example4" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                                <label className="form-label" for="form3Example4">Password</label>
                            </div>

                            <button 
                            type="submit" className="btn btn-primary btn-block mb-4" 
                            onClick={handleLogin}>
                                Login 
                            </button>
                            <p className='err-msg'>{loginStatus}</p>
                            </form>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default LoginPage;




