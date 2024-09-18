import React,{useState} from 'react';
import { useNavigate,useLocation } from 'react-router-dom';

const Login = ({onLogin}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const { name: registeredName, email: registeredEmail } = location.state || { name: "", email: "" }; 

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Implement your authentication logic here


    if (name === registeredName && email === registeredEmail) {
      setErrorMessage(""); // Clear error if they match
      alert("Login successful!");
      navigate('/tabledata');
      onLogin(name,email);
    } else {
      setErrorMessage("Please check your name and email.");
      alert("Please check your name and email.")
    }


    console.log('Login', email, name);
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-6">
        <form className="form-detail" onSubmit={handleLogin}>
        <h2>Login</h2>
        <div className="form-input">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-input">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
   
          <div className="form-input">
            <div className="form-btn">
              <button
                type="submit"
              >Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
