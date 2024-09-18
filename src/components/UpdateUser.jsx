import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

function UpdateUser({name,email,setIsEditing,onUpdateUser}) {

  const [updatedFirstName, setUpdatedFirstName] = useState(name);
  const [updatedEmail, setUpdatedEmail] = useState(email);

  const handleUpdate = (e) => {
    e.preventDefault();
    // Save the updated data here (e.g., send it to the backend)
    console.log('Updated Data', updatedFirstName, updatedEmail);

     // Pass the updated data to the parent component
     onUpdateUser(updatedFirstName, updatedEmail);

    // Navigate back to TableData with the updated data
    setIsEditing(false);
  };

  return (
    <div>
      <form onSubmit={handleUpdate} className="form-detail">
        <div className="form-input">
          <label> Name: </label>
          <input
            type="text"
            value={updatedFirstName}
            onChange={(e) => setUpdatedFirstName(e.target.value)}
            required
          />
        </div>
        <div className="form-input">
          <label>Email: </label>
          <input
            type="email"
            value={updatedEmail}
            onChange={(e) => setUpdatedEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-input">
          <div className="form-btn">
            <button type="submit">
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default UpdateUser;
