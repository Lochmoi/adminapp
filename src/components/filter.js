import React, { useState } from 'react';
import { Box } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Typography, TextField, Container, CssBaseline } from '@material-ui/core';
import Orders from './order'
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));

function Filter() {

    const [orders, setOrders] = useState([]);
    const [payload, setPayload] = useState("");
    const classes = useStyles();
    const [open, setOpen] = useState(false); //For the backdrop

    const handleClose = () => {
        setOpen(false);
      };


    const filterData = async (criteria) => {
        setOpen(true);
        try {
            let response = await fetch('https://micah-gas-api.herokuapp.com/api/filter', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    criteria: criteria,
                    payload: payload
                })
            });

            let json_response = await response.json();

            console.log(json_response.orders)

            setOrders(json_response.orders)
            setOpen(false);

            return json_response;

        } catch (error) {
            console.error(error);
            console.log(error);
        }
    }

    return (
        <React.Fragment>
            <div style={{ display: 'flex', flexDirection: 'column' }}>


                <div style={{ display: 'flex', flexWrap: "wrap", justifyContent: 'space-around', alignItems: 'center', fontSize: 30 }}>

                    <Box boxShadow={3}
                        borderRadius={16}
                        style={{ display: "flex", justifyContent: 'space-around', alignItems: 'center', backgroundColor: 'lightgrey', padding: '5px' }}
                        flexDirection="column">

                        <Typography variant="caption" display="block" gutterBottom>Customer</Typography>
                        <TextField id="outlined-basic" label="Phone no"
                            variant="outlined"
                            size="small"
                            value={payload}
                            onChange={(text) => setPayload(text.target.value)} />
                        <Button variant="contained"
                            style={{ marginTop: '5px' }}
                            onClick={() => filterData('phone_no')}>Filter</Button>
                    </Box>
                    <Box boxShadow={3}
                        borderRadius={16}
                        style={{ display: "flex", justifyContent: 'space-around', alignItems: 'center', backgroundColor: 'lightgrey', padding: '5px' }}
                        flexDirection="column">

                        <Typography variant="caption" display="block" gutterBottom>Gate</Typography>
                        <TextField id="outlined-basic"
                            label="Gate"
                            variant="outlined"
                            size="small"
                            value={payload}
                            onChange={(text) => setPayload(text.target.value)} />
                        <Button variant="contained"
                            style={{ marginTop: '5px' }}
                            onClick={() => filterData('gate')}>Filter</Button>
                    </Box>
                    <Box boxShadow={3}
                        borderRadius={16}
                        style={{ display: "flex", justifyContent: 'space-around', alignItems: 'center', backgroundColor: 'lightgrey', padding: '5px' }}
                        flexDirection="column">

                        <Typography variant="caption" display="block" gutterBottom>Order Type</Typography>
                        <TextField id="outlined-basic" label="Order Type"
                            variant="outlined"
                            size="small"
                            value={payload}
                            onChange={(text) => setPayload(text.target.value)} />
                        <Button variant="contained"
                            style={{ marginTop: '5px' }}
                            onClick={() => filterData('order_type')}>Filter</Button>
                    </Box>
                </div>

                <div style={{marginTop:'20px'}}>
                    <CssBaseline />
                    <Container maxWidth="lg" style={{ backgroundColor: 'white' }}>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: 30 }}>Filtered Orders</div>
                        {orders.map((order) => (<Orders order_details={order} />))}

                        <Backdrop className={classes.backdrop} open={open} onClick={handleClose} >
                            <CircularProgress color="inherit" />
                        </Backdrop>


                    </Container>

                </div>

            </div>
        </React.Fragment>
    );
}

export default Filter;
