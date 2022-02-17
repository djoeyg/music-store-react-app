import '../App.css';
import { Link, useHistory } from 'react-router-dom';
import allOrders from '../data/allOrdersData.js';
import AllOrdersList from '../components/allOrdersList';
import NavBar from '../components/navBarLinks';
import React from 'react';

function Orders({ setOrderToEdit }) {

  const history = useHistory();

  const onOrderUpdate = orderToEdit => {
    setOrderToEdit(orderToEdit);
    history.push("/update-order");
  }

  return (
    <>
    <NavBar></NavBar>
    <div className="body">
        <h2>Manage Orders Data</h2>
        <div className="App-header">
        <Link className="App-link" to="/order-tracks">Add new Order</Link>
        <br></br>
        <AllOrdersList ordersInfo={allOrders} onOrderUpdate={onOrderUpdate}></AllOrdersList>
        <br></br>
        </div>
    </div>
    </>
  );
}

export default Orders;