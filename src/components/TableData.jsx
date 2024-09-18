import React, { useState } from "react";
import { MdModeEdit } from "react-icons/md";
import UpdateUser from "./UpdateUser";
import { useLocation } from "react-router-dom";

function TableData({user,setIsEditing}) {
  const location = useLocation();
  const { name, email } = location.state || { name: "", email: "" };

  return (
    <div>
      <table className="table-field">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
              <div className="edit-icon" onClick={() => setIsEditing(true)}>
                <MdModeEdit />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TableData;
