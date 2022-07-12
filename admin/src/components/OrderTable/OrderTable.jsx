import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import './OrderTable.css'

const OrderTable = () => {
  const columns = [
    { field: "id", headerName: "Order ID", width: 90 },
    { field: "username", headerName: "Username", width: 200 },
    { field: "status", headerName: "Order Status", width: 200 },
    { field: "date", headerName: "Order Date", width: 200 },
    { field: "payment", headerName: "Total", width: 200 },
    { field: "products", headerName: "Order Detail", width: 200 },
    { field: "action", headerName: " ", width: 200 },
  ]

  const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  ];

  return (
    <div className="ordertTableContainer">
      <div className="buttonContainer">
        <button className="order-btn">Delete Selected Order</button>
      </div>
      <div style={{ height: "80%", width: "90%", marginLeft: "2rem" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    </div>
  );
};

export default OrderTable;
