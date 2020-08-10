import React, { useState, useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Orders from './order';

function OrdersList() {

  useEffect(() => {
    fetchOrders();
  }, []);

  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    const data = await fetch(`http://localhost:5000/api/orders`);
    //console.log(data);

    const orders = await data.json();
    console.log(orders.orders);
    setOrders(orders.orders);

  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" style={{backgroundColor: 'white'}}>
        <div style={{display: 'flex', justifyContent:'center', alignItems:'center', fontSize: 30}}>All Orders</div>

        {orders.map((order) => (<Orders order_details={order}/>))}

      </Container>
    </React.Fragment>
  );
}

export default OrdersList;
