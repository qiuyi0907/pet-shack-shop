import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Customer.css";
import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
} from "@mui/icons-material";
import EditIcon from "@mui/icons-material/Edit";
import { UserRows } from "../../Data/Data";
import { useLocation } from "react-router-dom";
const Customer = () => {
  const location = useLocation();
  const userID = location.pathname.split("/")[2];
  const personalData = UserRows.filter((user) => user.id.toString() === userID)[0];
  console.log(personalData);

  return (
    <div className="customer">
      <Sidebar />
      <div
        className="userPage"
        style={{
          height: "80%",
          width: "90%",
          marginLeft: "2rem",
          marginTop: "4rem",
        }}
      >
        <div className="userTitleContainer">
          <h1 className="userTitle">User Information</h1>
        </div>
        <div className="userContainer">
          <div className="userShow">
            <div className="userShowTop">
              <img
                src={personalData.profilePicture}
                alt=""
                className="userShowImg"
              />
              <div className="userShowTopTitle">
                <span className="userShowUsername">{personalData.firstName} {personalData.lastName}</span>{" "}
              </div>
            </div>
            <div className="userShowBottom">
              <span className="userShowTitle">Account Details</span>
              <div className="userShowInfo">
                <PermIdentity className="userShowIcon" />
                <span className="userShowInfoTitle">{personalData.userName}</span>
              </div>
              <div className="userShowInfo">
                <CalendarToday className="userShowIcon" />
                <span className="userShowInfoTitle">{personalData.birthday}</span>
              </div>
              <span className="userShowTitle">Contact Details</span>
              <div className="userShowInfo">
                <PhoneAndroid className="userShowIcon" />
                <span className="userShowInfoTitle">{personalData.phoneNumber}</span>
              </div>
              <div className="userShowInfo">
                <MailOutline className="userShowIcon" />
                <span className="userShowInfoTitle">{personalData.email}</span>
              </div>
              <div className="userShowInfo">
                <LocationSearching className="userShowIcon" />
                <span className="userShowInfoTitle">{personalData.address}</span>
              </div>
            </div>
          </div>
          <div className="userUpdate">
            <span className="userUpdateTitle">Edit</span>
            <form className="userUpdateForm">
              <div className="userUpdateLeft">
                <div className="userUpdateItem">
                  <label>Username</label>
                  <input
                    type="text"
                    placeholder={personalData.userName}
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Full Name</label>
                  <input
                    type="text"
                    placeholder= {`${personalData.firstName} ${personalData.lastName}`}
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Email</label>
                  <input
                    type="text"
                    placeholder={personalData.email}
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Phone</label>
                  <input
                    type="text"
                    placeholder={personalData.phoneNumber}
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Address</label>
                  <input
                    type="text"
                    placeholder={personalData.address}
                    className="userUpdateInput"
                  />
                </div>
              </div>
              <div className="userUpdateRight">
                <div className="userUpdateUpload">
                  <img
                    className="userUpdateImg"
                    src={personalData.profilePicture}
                    alt=""
                  />
                  <label htmlFor="file">
                    <button className="userUpdateProfileButton">
                      <EditIcon style={{ fontSize: "18px" }} />
                      <span>Edit</span>
                    </button>
                  </label>
                  <input type="file" id="file" style={{ display: "none" }} />
                </div>
                <button className="userUpdateButton">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;
