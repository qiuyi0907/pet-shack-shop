import React from "react";
import "./Customers.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import CustomersTable from "../../components/CustomersTable/CustomersTable";

const Customers = () => {
  return (
    <div className="Customers">
      <Sidebar />
      <div className="tableContainer">
        <div className="buttonContainer">
          <button>Delete</button>
          <button>Add new customer</button>
        </div>
        <CustomersTable />
      </div>
      
    </div>
  );
};

export default Customers;
