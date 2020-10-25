import React from 'react';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';

export default function Orders(props) {
    var order_details = props.order_details;
    
    return (
        <React.Fragment>
            <Box mt={1} pl={1} display="flex" justifyContent="center" alignItems="center" boxShadow={3} borderRadius={16} style={{ backgroundColor: 'lightgrey'/*, height: '10vh'*/ }}>
                
                    <div style={{ width: '30%', height: '100%',display:"flex", justifyContent:"center", alignItems:"center", flexDirection:'column', fontSize: '1.5vw' }}>
                        <div >Name: {props.order_details.name} </div>
                        <div >Apartment:  {JSON.parse(props.order_details.location).apartment}</div>
                    </div>

                    <div style={{ width: '30%', height: '100%',display:"flex", justifyContent:"center", alignItems:"center", flexDirection:'column', fontSize: '1.5vw' }}>
                        <div style={{ height: '50%' }}>Order type:  {props.order_details.order_type}</div>
                        <div style={{ height: '50%' }}>Date Time:  {props.order_details.date_time}</div>
                    </div>

                    <div style={{ width: '25%', height: '100%',display:"flex", justifyContent:"center", alignItems:"center", flexDirection:'column', fontSize: '1.5vw' }}>
                        <div style={{ height: '50%' }}>Brand:  {props.order_details.brand}</div>
                        <div style={{ height: '50%' }}>Order Status:  {props.order_details.complete}</div>

                    </div>
                    <div style={{ width: '15%', height: '100%',display:"flex", justifyContent:"center", alignItems:"center", flexDirection:'column'  }}>
                        
                        <div>
                            <Link to={{pathname:'/details', order_details:{order_details}}} style={{ textDecoration: 'none', color: 'black',fontSize: '1.5vw' }}>
                                <Button style={{ fontSize: '1.5vw' }} 
                                    variant="contained" 
                                    color={ props.order_details.complete==="Pending"? "secondary" : "default"}>
                                    Details
                                </Button>
                            </Link>
                        </div>

                    </div>
                

            </Box>

        </React.Fragment>
    );
}