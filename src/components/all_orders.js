import React, { useState, useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Orders from './order';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

function OrdersList() {

  useEffect(() => {
    fetchOrders();
  }, []);

  const classes = useStyles();
  const [open, setOpen] = useState(true);

  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    const data = await fetch(`https://micah-gas-api.herokuapp.com/api/orders`);
    //console.log(data);

    const orders = await data.json();
    console.log(orders.orders);
    setOrders(orders.orders);
    setOpen(false);

  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" style={{ backgroundColor: 'white' }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: 30 }}>All Orders</div>

        {orders.map((order) => (<Orders order_details={order} />))}

        <Backdrop className={classes.backdrop} open={open} >
          <CircularProgress color="inherit" />
        </Backdrop>

      </Container>
    </React.Fragment>
  );
}

export default OrdersList;
