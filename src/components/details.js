import React, { useState, useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Orders from './order';
import { Box } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import MapContainer from './map';
import { Link, useHistory } from 'react-router-dom';

function Details(props) {

  let history = useHistory();

  const [completed, setCompleted] = useState("pending")
  const [status, setStatus] = useState(props.location.order_details.order_details.complete)

  const completeOrder = async () => {
    const data = await fetch(`https://micah-gas-api.herokuapp.com/complete_order/${props.location.order_details.order_details.order_no}`);

    const response = await data.json();
    response.message === "Succesfully completed" && setCompleted('completed');
    setStatus("Completed")
  }


  console.log(props.location.order_details.order_details);


  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md" style={{ backgroundColor: 'white' }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: 30 }}>Order Details</div>
        <Box mt={1}
          boxShadow={3}
          borderRadius={16}
          style={{ backgroundColor: 'lightgrey', height: '40vh' }}
          display="flex"
          flexDirection="row"
          >

          <div style={{ width: '30%', marginTop: '10px', marginLeft: "5px", display: 'flex', flexDirection:'column', justifyContent: 'space-around',alignItems: 'center' }}
          >
            <div >Name:  </div>
            <div >Phone Number:  </div>
            <div >Apartment:  </div>
            <div >Order type:  </div>
            <div >Brand:  </div>
            <div >Placed Time:  </div>
            <div >Date Time:  </div>
            <div >Order Status:  </div>
          </div>

          <div style={{ width: '40%', marginTop: '10px', display: 'flex', flexDirection:'column', justifyContent: 'space-around',alignItems: 'center'}}>

            <div > <i> {props.location.order_details.order_details.name} </i> </div>
            <div > <i> {props.location.order_details.order_details.phone_no} </i> </div>
            <div > <i> {JSON.parse(props.location.order_details.order_details.location).apartment} </i>  </div>
            <div > <i> {props.location.order_details.order_details.order_type} </i> </div>
            <div > <i> {props.location.order_details.order_details.brand} </i> </div>
            <div > <i> {props.location.order_details.order_details.placed_time} </i> </div>
            <div > <i> {props.location.order_details.order_details.date_time} </i> </div>
            <div > <i> {status} </i></div>
          </div>

          <div style={{
            height: '100%',
            width: '30%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'center'
          }}
          >


            <Button
              style={{ fontSize: '1.5vw' }}
              color={(status === 'Pending') ? "secondary" : "default"}
              variant="contained"
              onClick={() => completeOrder()}>
              {(status === 'Pending') ? "Mark as complete" : "Completed"}
            </Button>


            <Button
              style={{ fontSize: '1.5vw' }}
              color="default"
              variant="contained"
              onClick={() => history.goBack()}>
              Back
              </Button>




          </div>

        </Box>

        <Box mt={1} boxShadow={3} borderRadius={16} style={{ backgroundColor: 'lightgrey', height: '40vh' }}>
          <MapContainer />
        </Box>

      </Container>
    </React.Fragment>
  );
}

export default Details;
