import React from "react";
import "./Customers.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import CustomersTable from "../../components/CustomersTable/CustomersTable";
const Customers = () => {
  return (
    <div className="Customers">
      <Sidebar />
      <CustomersTable />
    </div>
  );
};

export default Customers;
