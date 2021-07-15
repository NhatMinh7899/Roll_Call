import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Image from '../images/ptithcm.jpg';
import {Host} from '../utils/config';
import axios from 'axios';
import { setUserSession } from '../utils/common';
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: `url(${Image})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
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
}));

function Login(props) {
  const username = useFormInput('');
  const password = useFormInput('');
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
 
  // handle button click of login form
  const handleLogin = () => {
    setError(null);
    setLoading(true);
    axios.post(`${Host}/users/login`, { id: username.value, password: password.value })
    .then(response => {
      // console.log(response.data.data[0]);
      // console.log(response.data.data[0].token);
      setLoading(false);
      let data = response.data.data[0];
      setUserSession(response.data.data[0].token, response.data.data[0] );
      navigate('/app/dashboard', {state: {data}});
    }).catch((error) => {
      setLoading(false);
      if (error.response.status === 404) setError(error.response.data.message);
      else setError("Something went wrong. Please try again later.");
      navigate('/login')
      //console.log(error);
    });
    //props.history.push('/dashboard');
    
  }
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
    <CssBaseline />
    <Grid item xs={false} sm={4} md={7} className={classes.image} />
    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="user"
            label="UserName"
            name="user"
            autoComplete="email"
            autoFocus
            {...username}
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
            autoComplete="current-password"
            {...password}
          />
         
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleLogin} disabled={loading}

          >
            Sign In
          </Button>
               
        </form>
      </div>
    </Grid>
  </Grid>

  );
}
 
const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);
 
  const handleChange = e => {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  }
}
 
export default Login;

