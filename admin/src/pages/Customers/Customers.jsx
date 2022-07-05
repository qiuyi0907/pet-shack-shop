import React, { useState } from "react";
import "./Customers.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import CustomersTable from "../../components/CustomersTable/CustomersTable";
// import { UserRows } from "../../Data/Data";

const Customers = () => {
  // const [data, setData] = useState(UserRows);
  // const handleDelete = (id) => {
  //   setData(data.filter((item) => item.id !== id));
  // };
  return (
    <div className="Customers">
      <Sidebar />
      <div className="tableContainer">
        <div className="buttonContainer">
          <button >Delete Selected Customer</button>
          <button>Add New Customer</button>
        </div>
        <CustomersTable />
      </div>
      
    </div>
  );
};

export default Customers;
