<Switch>

          <Route path='/' exact component={OrdersList}/>
          <Route path='/latest' component={LatestOrders}/>
          <Route path='/pending' component={PendingOrders}/>
          
</Switch>

{JSON.parse(props.order_details.location).apartment}

// This is what you were using

<Box mt={1} display="flex" justifyContent="center" alignItems="center" boxShadow={3} borderRadius={16} style={{ backgroundColor: 'lightgrey'/*, height: '10vh'*/ }}>
    <Box display="flex" justifyContent="center" alignItems="center" style={{ backgroundColor: 'blue'

//On details

<Box mt={1} boxShadow={3} borderRadius={16} style={{ backgroundColor: 'lightgrey', height: '40vh' }}>
          <Box style={{ justifyContent: 'center', height: '40%' }} ml={5} display="flex" flexDirection="row">
            <div style={{ justifyContent: 'center', width: '30%', marginTop: '10px', fontSize: '1.5vw' }}>
              <div >Name:  </div>
              <div >Phone Number:  </div>
              <div >Apartment:  </div>
              <div >Order type:  </div>
              <div >Brand:  </div>
              <div >Placed Time:  </div>
              <div >Date Time:  </div>
              <div >Order Status:  </div>
            </div>

            <div style={{ width: '40%', marginTop: '10px', fontSize: '1.5vw' }}>

              <div > <i> {props.location.order_details.order_details.name} </i> </div>
              <div > <i> {props.location.order_details.order_details.phone_no} </i> </div>
              <div > <i> {JSON.parse(props.location.order_details.order_details.location).apartment} </i>  </div>
              <div > <i> {props.location.order_details.order_details.order_type} </i> </div>
              <div > <i> {props.location.order_details.order_details.brand} </i> </div>
              <div > <i> {props.location.order_details.order_details.placed_time} </i> </div>
              <div > <i> {props.location.order_details.order_details.date_time} </i> </div>
              <div > <i> {status} </i></div>
            </div>

            <div style={{ height: '100%', width: '30%', backgroundColor: 'blue' }}
            >


              <Button
                style={{ fontSize: '1.5vw' }}
                color={(status === 'Pending') ? "secondary" : "default"}
                variant="contained"
                onClick={() => completeOrder()}>
                {(status === 'Pending') ? "Mark as complete" : "Completed"}
              </Button>



            </div>
          </Box>
        </Box>

        <Box mt={1} boxShadow={3} borderRadius={16} style={{ backgroundColor: 'lightgrey', height: '40vh' }}>
          <MapContainer />
        </Box>