import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link, useHistory } from 'react-router-dom';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));




export default function SignIn(props) {
    let history = useHistory();

    const classes = useStyles();
    const [phone_no, setPhoneNo] = useState('');
    const [password, setPassword] = useState('');
    const [open, setOpen] = useState(false); //For the backdrop

    const handleClose = () => {
        setOpen(false);
    };

    const validateAndLogin = (event) => {
        if (phone_no === '' || password === '') {
            alert('Missing Details', 'Please ensure you have provided the phone number and the password!')
        } else {
            console.log('stuck before')
            event.preventDefault();
            RequestLogin()
            
            // setLoadingModalVisible(true)
            // navigation.navigate('Order')
        }
    }

    const RequestLogin = async () => {
        setOpen(true);
        try {

            console.log('used the first')
            let response = await fetch('https://micah-gas-api.herokuapp.com/admin_login', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    phone_no: phone_no,
                    password: password
                })
            });


            let json_response = await response.json();
            console.log(json_response)

            findNextStep(json_response)
            setOpen(false)

            return json_response;

        } catch (error) {
            console.error(error);
            console.log(error);
            setOpen(false)
        }
    }

    const findNextStep = (json_response) => {
        if (json_response.message === "Invalid username/password combination") {
            //props.history.push('/all')
            history.push('/all')
        } else {
            alert('Login failed', 'Invalid phone number and password combination')
        }
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
        </Typography>
                <form className={classes.form} onSubmit={validateAndLogin}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="phone_no"
                        label="Phone number"
                        name="phone_no"
                        autoFocus
                        value={phone_no}
                        onChange={(text) => setPhoneNo(text.target.value)}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        value={password}
                        onChange={(text) => setPassword(text.target.value)}
                    />

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}

                    >
                        Sign In
          </Button>

                </form>
                <Backdrop className={classes.backdrop} open={open} onClick={handleClose} >
                    <CircularProgress color="inherit" />
                </Backdrop>
            </div>
        </Container>
    );
}
