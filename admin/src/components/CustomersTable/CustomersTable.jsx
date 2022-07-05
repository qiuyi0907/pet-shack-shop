import React from "react";
import "./CustomersTable.css";
import { DataGrid } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { UserRows } from "../../Data/Data";
import { useState } from "react";
import { Link } from "react-router-dom";

const CustomersTable = () => {
  const [data, setData] = useState(UserRows);
  const [deletedData, setDeletedData] = useState([]);
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const deleteMultipleData = () => {
    const updateData = data.filter((item) => !deletedData.includes(item.id));
    setData(updateData);
  }

  const columns = [
    {
      field: "userName",
      headerName: "Username",
      width: 220,
      sortable: true,
      renderCell: (params) => {
        return (
          <div className="user">
            <img src={params.row.profilePicture} alt="" />
            <span className="username">{params.row.userName}</span>
          </div>
        );
      },
    },
    { field: "id", headerName: "ID", width: 100, sortable: true },
    { field: "email", headerName: "Email", width: 200, editable: true },
    {
      field: "dateCreated",
      headerName: "Date Created",
      type: "date",
      width: 150,
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
      width: 100,
      renderCell: (params) => {
        return (
          <div className="action">
            <Link to={"/customers/" + params.row.id}>
              <EditIcon className="actionIcon" />
            </Link>

            <DeleteIcon
              className="actionIcon"
              onClick={() => handleDelete(params.row.id)}
            />
          </div>
        );
      },
    },
  ];

  return (
    <div className="tableContainer">
      <div className="buttonContainer">
        <button onClick={() => deleteMultipleData()}>Delete Selected Customer</button>
        <Link to={"/customers/addnewcustomer"}>
            <button>Add New Customer</button>
        </Link>
        
      </div>
      <div style={{ height: "80%", width: "90%", marginLeft: "2rem" }}>
        <DataGrid
          rows={data}
          disableSelectionOnClick
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection
          onSelectionModelChange={(rows) => setDeletedData(rows)}
        />
      </div>
    </div>
  );
};

export default CustomersTable;
