import React, { useState, useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Orders from './order';
import { Box } from '@material-ui/core';
import Button from '@material-ui/core/Button';

function Details(props) {
    console.log(props.location.order_details.order_details);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md" style={{backgroundColor: 'white'}}>
        <div style={{display: 'flex', justifyContent:'center', alignItems:'center', fontSize: 30}}>Orders Details</div>
        <Box mt={1} boxShadow={3} borderRadius={16} style={{ backgroundColor: 'lightgrey', height: '40vh' }}>
                <Box style={{justifyContent: 'center', height:'40%'}} ml={5} display="flex" flexDirection="row">
                    <div style={{ justifyContent: 'center', width: '33%', marginTop: '10px', fontSize: '1.5vw' }}>
                        <div >Name:  </div>
                        <div >Phone Number:  </div>
                        <div >Apartment:  </div>
                        <div >Order type:  </div>
                        <div >Brand:  </div>
                        <div >Placed Time:  </div>
                        <div >Date Time:  </div>
                        <div >Order Status:  </div>
                    </div>

                    <div style={{ width: '33%', marginTop: '10px',fontSize: '1.5vw' }}>
                        
                        <div > <i> {props.location.order_details.order_details.name} </i> </div>
                        <div > <i> {props.location.order_details.order_details.phone_no} </i> </div>
                        <div > <i> {JSON.parse(props.location.order_details.order_details.location).apartment} </i>  </div>
                        <div > <i> {props.location.order_details.order_details.order_type} </i> </div>
                        <div > <i> {props.location.order_details.order_details.brand} </i> </div>
                        <div > <i> {props.location.order_details.order_details.placed_time} </i> </div>
                        <div > <i> {props.location.order_details.order_details.date_time} </i> </div>
                        <div > <i> {props.location.order_details.order_details.complete} </i></div>
                    </div>

                    <div style={{height: '100%', width: '33%', marginTop: '10px' }}>
                        
                        <div style={{ height: '30%' }}><Button style={{fontSize: '1.5vw'}} variant="contained">Mark as complete</Button></div>
                        <div style={{ height: '30%', marginTop: '15px' }}>
                            <Button style={{fontSize: '1.5vw'}} variant="contained" color="primary">
                                View location on map
                            </Button>
                        </div>

                    </div>
                </Box>
        </Box>

        <Box mt={1} boxShadow={3} borderRadius={16} style={{ backgroundColor: 'lightgrey', height: '40vh' }}>
        <h1>Put MapView here </h1>
        </Box>

      </Container>
    </React.Fragment>
  );
}

export default Details;
