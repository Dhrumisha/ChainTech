import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e)=>{
    e.preventDefault();
    navigate("/login",{ state: { name, email } });
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-6"></div>
        <form action="" className="form-detail" onSubmit={handleRegister}>
        <h2>Register Form</h2>
          <div className="form-input">
            <label html For="Name">
               Name*
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Enter Name"
            ></input>
          </div>
         
          <div className="form-input">
            <label htmlFor="Email">Email*</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter Email"
            ></input>
          </div>

          <div className="form-input">
            <div className="form-btn">
              <button
                type="submit"
              >
                Register
              </button>
            </div>
          </div>
        </form>
    </div>
  );
}

export default Register;


