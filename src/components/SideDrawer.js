import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import OrdersList from './all_orders';
import {Link} from 'react-router-dom';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  paper: {
    background: "lightgrey",
    width: '25%'
  },
});

export default function SideDrawer(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = () => (
    <div
      role="presentation"
      onClick={toggleDrawer("right", false)}
      onKeyDown={toggleDrawer("right", false)}
    >
      <List component="nav">
        <Link to='/' style={{ textDecoration: 'none', color: 'black' }}><ListItem button >All Orders</ListItem></Link>
        <Divider/>
        <Link to='/latest' style={{ textDecoration: 'none', color: 'black' }}><ListItem button >Latest Orders</ListItem></Link>
        <Divider/>
        <Link to='/pending' style={{ textDecoration: 'none', color: 'black' }}><ListItem button >Pending Orders</ListItem></Link>
        <Divider/>
        <Link to='/filter' style={{ textDecoration: 'none', color: 'black' }}><ListItem button >Filter Orders</ListItem></Link>
      </List>
    </div>
  );

  return (
    <div>
        <Drawer anchor="right" open={props.open} onClose={()=>props.onClose(false)} 
          classes={{ paper: classes.paper}}>
          {list()}
        </Drawer>
    </div>
  );
}
