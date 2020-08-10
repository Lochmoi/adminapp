import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Orders from './order';

export default function LatestOrders() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" style={{backgroundColor: 'red'}}>
        <div style={{display: 'flex', justifyContent:'center', alignItems:'center', fontSize: 30}}>Latest Orders</div>
        <Orders/>
        <Orders/>
      </Container>
    </React.Fragment>
  );
}