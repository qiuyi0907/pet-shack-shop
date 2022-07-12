import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./NewCustomer.css";

const NewCustomer = () => {
  return (
    <div className="NewCustomer">
      <Sidebar />
      <div
        className="newUserContainer"
        style={{
          height: "80%",
          width: "90%",
          marginLeft: "2rem",
          marginTop: "4rem",
        }}
      >
        <h1 className="newUserTitle">New User</h1>
        <div className="newProfilePicture">
          <img src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="newUserImg" />
          <button className="newUserImgUpdateButton">Update</button>
        </div>

        <form className="newUserForm">
          <div className="newUserItem">
            <label>First Name</label>
            <input type="text" placeholder="John" />
          </div>
          <div className="newUserItem">
            <label>Last Name</label>
            <input type="text" placeholder="Smith" />
          </div>
          <div className="newUserItem">
            <label>Username</label>
            <input type="text" placeholder="john" />
          </div>
          <div className="newUserItem">
            <label>Password</label>
            <input type="password" placeholder="password" />
          </div>
          <div className="newUserItem">
            <label>Email</label>
            <input type="email" placeholder="john@gmail.com" />
          </div>

          <div className="newUserItem">
            <label>Phone</label>
            <input type="text" placeholder="+1 123 456 78" />
          </div>
          <div className="newUserItem">
            <label>Address</label>
            <input type="text" placeholder="New York | USA" />
          </div>
          <div className="newUserItem">
            <label>Birthday</label>
            <input type="date" placeholder="1999/07/28" />
          </div>
          <button className="newUserButton">Create</button>
        </form>

        <Link to={"/customers/"}>
          <button className="back-btn">Back</button>
        </Link>
      </div>
    </div>
  );
};

export default NewCustomer;
