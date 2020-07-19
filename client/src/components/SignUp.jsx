import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import {
  Grid,
  Link,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
  Dialog,
  Button,
} from './';

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(2),
  },
  title: {
    margin: theme.spacing(2, 2, 0, 2),
  },
  form: {
    margin: theme.spacing(2, 2),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp(props) {
  const classes = useStyles();
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog
      className={classes.paper}
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <Typography
        align="center"
        component="h1"
        variant="h4"
        className={classes.title}
      >
        Sign in
      </Typography>
      <form className={classes.form} noValidate>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          color="secondary"
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
          color="secondary"
          autoComplete="current-password"
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="secondary" />}
          label="Remember me"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          disabled
          className={classes.submit}
        >
          Sign In
        </Button>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2" color="inherit">
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link href="#" variant="body2" color="inherit">
              {'Sign Up'}
            </Link>
          </Grid>
        </Grid>
      </form>
    </Dialog>
  );
}

SignUp.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};
