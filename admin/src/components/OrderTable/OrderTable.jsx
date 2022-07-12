import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./OrderTable.css";
import { OrderRows } from "../../Data/Data";
import DeleteIcon from "@mui/icons-material/Delete";

const OrderTable = () => {
  const statusStyle = (status) => {
    if (status === "paid") {
      return {
        background: "#ffadad8f",
        color: "red",
      };
    }
  };

  const columns = [
    { field: "id", headerName: "Order ID", width: 90 },
    { field: "username", headerName: "Username", width: 200 },
    {
      field: "status",
      headerName: "Order Status",
      width: 200,
      renderCell: (params) => {
        return (
          <span className="orderStatus" style={statusStyle(params.row.status)}>
            {params.row.status}
          </span>
        );
      },
    },
    { field: "date", headerName: "Order Date", type: "date", width: 200 },
    {
      field: "payment",
      headerName: "Total",
      width: 200,
      renderCell: (params) => {
        return <span>CAD${params.row.payment}</span>;
      },
    },
    {
      field: "products",
      headerName: "Order Detail",
      width: 200,
      renderCell: (params) => {
        return <span className="productDetails">details</span>;
      },
    },
    {
      field: "actions",
      headerName: " ",
      width: 200,
      rendeCell: (params) => {
        return (
          <div>
            <DeleteIcon />
          </div>
        );
      },
      // There is a problem here, delete icon not working
    },
  ];

  return (
    <div className="ordertTableContainer">
      <div className="buttonContainer">
        <button className="order-btn">Delete Selected Order</button>
      </div>
      <div style={{ height: "80%", width: "90%", marginLeft: "2rem" }}>
        <DataGrid
          rows={OrderRows}
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
