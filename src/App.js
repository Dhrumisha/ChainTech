import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import TableData from "./components/TableData";
import UpdateUser from "./components/UpdateUser";
import "./style.css";

function App() {
  // because we need in both component tabledata and updateuser

  const [user, setUser] = useState({
    name: "", // Initial name
    email: "", // Initial email
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleLogin = (name,email)=>{
    setUser({name,email});
  }


  const handleUpdateUser = (updatedName, updatedEmail) => {
    setUser({
      name: updatedName,
      email: updatedEmail,
    });
    setIsEditing(false);
  };

  return (
  
      <Router>
        <div className="container">
          <Routes>
            <Route path="/" element={<Register/>} />
            <Route path="/login" element={<Login onLogin={handleLogin}/>} />
            <Route path="/tabledata" element={isEditing ? (
                <UpdateUser
                  name={user.name}
                  email={user.email}
                  setIsEditing={setIsEditing}
                  onUpdateUser={handleUpdateUser}
                />
              ) : (
                <TableData
                  user={user}
                  setIsEditing={setIsEditing}
                />
              )} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
