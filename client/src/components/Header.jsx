import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { amber } from '@material-ui/core/colors';
import { SignUp, Container, Link, Toolbar } from './';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    padding: theme.spacing(1, 0, 0, 0),
    color: 'theme.palette.text.primary',
  },
  toolbarTitle: {
    flex: 1,
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      'Galada',
      'cursive',
      'Roboto',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    [theme.breakpoints.down('md')]: {
      fontSize: '3rem',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '2.6rem',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.8rem',
    },
  },
  HomeBtn: {
    fontSize: 16,
    border: 0,
    color: 'theme.palette.text.primary',
    borderColor: 'theme.palette.text.primary',
  },
  SignInBtn: {
    fontSize: 16,
    border: 0,
    color: amber[800],
  },
}));

export default function Header() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  return (
    <>
      <Container maxWidth="lg">
        <Toolbar
          className={classes.toolbar}
          id="back-to-top-anchor"
          disableGutters
        >
          <Link href="/" underline="none">
            <Button className={classes.HomeBtn} size="medium">
              Home
            </Button>
          </Link>
          <Typography
            variant="h3"
            component="h2"
            color="inherit"
            align="center"
            noWrap
            className={classes.toolbarTitle}
          >
            News Portal
          </Typography>

          <Button
            className={classes.SignInBtn}
            onClick={handleClickOpen}
            size="medium"
          >
            Sign in
          </Button>
          <SignUp open={open} onClose={handleClose} />
        </Toolbar>{' '}
      </Container>
    </>
  );
}
