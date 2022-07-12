import React from 'react'
import OrderTable from '../../components/OrderTable/OrderTable';
import Sidebar from '../../components/Sidebar/Sidebar';
import './Orders.css'

const Orders = () => {
    return (
        <div className="Orders">
          <Sidebar />
          <OrderTable />
        </div>
      );
}

export default Orders