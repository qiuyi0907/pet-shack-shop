import React from "react";
import "./CustomersTable.css";
import { DataGrid } from "@mui/x-data-grid";
import {
  randomCreatedDate,
  randomTraderName,
  randomEmail,
  randomUpdatedDate,
} from "@mui/x-data-grid-generator";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import img1 from '../../imgs/img1.png';
import img2 from '../../imgs/img2.png';
import img3 from '../../imgs/img3.png';

const CustomersTable = () => {
  const columns = [
    {
      field: "fullName",
      headerName: "Customer",
      width: 230,
      sortable: true,
      renderCell: (params) => {
        return(
          <div className="user">
            <img src={params.row.profilePicture} alt="" />
            {params.row.fullName}
          </div>
        )
      }
    },
    { field: "id", headerName: "ID", width: 100, sortable: true },
    { field: "email", headerName: "Email", width: 200, editable: true },
    {
      field: "dateCreated",
      headerName: "Date Created",
      type: "date",
      width: 160,
      editable: true,
    },
    {
      field: "lastLogin",
      headerName: "Last Login",
      type: "dateTime",
      width: 220,
      editable: true,
    },
    {
      field: "actions",
      type: "actions",
      width: 140,
      renderCell: (params) => {
        return (
          <div className="action">
            <EditIcon className="actionIcon"/>
            <DeleteIcon className="actionIcon"/>
          </div>
        );
      },
    },
  ];

  const rows = [
    {
      id: 1,
      fullName: randomTraderName(),
      profilePicture: img1,
      email: randomEmail(),
      dateCreated: randomCreatedDate(),
      lastLogin: randomUpdatedDate(),
    },
    {
      id: 2,
      fullName: randomTraderName(),
      profilePicture: img2,
      email: randomEmail(),
      dateCreated: randomCreatedDate(),
      lastLogin: randomUpdatedDate(),
    },
    {
      id: 3,
      fullName: randomTraderName(),
      profilePicture: img3,
      email: randomEmail(),
      dateCreated: randomCreatedDate(),
      lastLogin: randomUpdatedDate(),
    },
    {
      id: 4,
      fullName: randomTraderName(),
      profilePicture: img1,
      email: randomEmail(),
      dateCreated: randomCreatedDate(),
      lastLogin: randomUpdatedDate(),
    },
    {
      id: 5,
      fullName: randomTraderName(),
      profilePicture: img2,
      email: randomEmail(),
      dateCreated: randomCreatedDate(),
      lastLogin: randomUpdatedDate(),
    },
    {
      id: 6,
      fullName: randomTraderName(),
      profilePicture: img3,
      email: randomEmail(),
      dateCreated: randomCreatedDate(),
      lastLogin: randomUpdatedDate(),
    },
    {
      id: 7,
      fullName: randomTraderName(),
      profilePicture: img1,
      email: randomEmail(),
      dateCreated: randomCreatedDate(),
      lastLogin: randomUpdatedDate(),
    },
    {
      id: 8,
      fullName: randomTraderName(),
      profilePicture: img2,
      email: randomEmail(),
      dateCreated: randomCreatedDate(),
      lastLogin: randomUpdatedDate(),
    },
    {
      id: 9,
      fullName: randomTraderName(),
      profilePicture: img3,
      email: randomEmail(),
      dateCreated: randomCreatedDate(),
      lastLogin: randomUpdatedDate(),
    },
    {
      id: 10,
      fullName: randomTraderName(),
      profilePicture: img1,
      email: randomEmail(),
      dateCreated: randomCreatedDate(),
      lastLogin: randomUpdatedDate(),
    },
    {
      id: 11,
      fullName: randomTraderName(),
      profilePicture: img2,
      email: randomEmail(),
      dateCreated: randomCreatedDate(),
      lastLogin: randomUpdatedDate(),
    },
    {
      id: 12,
      fullName: randomTraderName(),
      profilePicture: img3,
      email: randomEmail(),
      dateCreated: randomCreatedDate(),
      lastLogin: randomUpdatedDate(),
    },
  ];

  return (
    <div style={{ height: "80%", width: "90%", marginTop: "4rem", marginLeft: "2rem" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
  );
};

export default CustomersTable;