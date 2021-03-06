import React, { useState } from "react";
import PropTypes from "prop-types";
import AppBar from "../../../layout/AppBar";
import Avatar from "@material-ui/core/Avatar";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Alert, AlertTitle } from "@material-ui/lab";

import Button from "../../../components/common/Button";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright Â© "}
      <Link color="inherit" href="https://material-ui.com/">
        Solve - n+1
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignIn = (props) => {
  //declare states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  var inputRefs = [];

  console.log("sign in render");
  console.log(`${email} ${password}`);

  const classes = useStyles();

  const updateEmail = (event) => {
    setEmail(event.target.value);
  };

  const updatePassword = (event) => {
    setPassword(event.target.value);
  };

  const redirectUser = () => {
    props.submitHandler({ email, password });
  };

  const handleKeyPress = (e) => {
    const event = e;
    const { currentTarget } = e;
    if (event.key === "Enter") {
      let inputIndex = inputRefs.indexOf(currentTarget);
      if (inputIndex < inputRefs.length - 1) {
        inputRefs[inputIndex + 1].focus();
      } else {
        inputRefs[0].focus();
      }
      event.preventDefault();
    }
  };
  return (
    <>
      <AppBar />
      <Container component="div" maxWidth="xs">
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              inputProps={{ onKeyPress: handleKeyPress }}
              inputRef={(ref) => inputRefs.push(ref)}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={updateEmail}
            />
            <TextField
              inputRef={(ref) => inputRefs.push(ref)}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={updatePassword}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            {props.signInError === "" ? null : (
              <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                <strong>{props.signInError}</strong>
              </Alert>
            )}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              size="large"
              className={classes.submit}
              onClick={redirectUser}
              isLoading={props.isLoading}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    </>
  );
};

SignIn.propTypes = {
  submitHandler: PropTypes.func.isRequired,
  signInError: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
};
export default SignIn;
