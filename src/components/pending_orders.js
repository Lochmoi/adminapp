import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Orders from './order';

export default function PendingOrders() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" style={{backgroundColor: 'green'}}>
        <div style={{display: 'flex', justifyContent:'center', alignItems:'center', fontSize: 30}}>Pending Orders</div>
        <Orders/>
        <Orders/>
      </Container>
    </React.Fragment>
  );
}