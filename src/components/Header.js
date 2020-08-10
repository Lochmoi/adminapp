import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SideDrawer from './SideDrawer'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));


export default function Header() {
  const classes = useStyles();

  const [drawerOpen, toggle] = useState(false)

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            LochMoi Gas Deliveries
          </Typography>
          <IconButton edge="start" className={classes.menuButton}
           color="inherit" aria-label="menu"
           onClick={()=>toggle(true)}>
            <MenuIcon />
          </IconButton>

          <SideDrawer open={drawerOpen} onClose={(value)=>toggle(value)}/> 
        </Toolbar>
      </AppBar>
    </div>
  );
}
