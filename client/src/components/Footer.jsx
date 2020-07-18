import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Copyrights, Container } from './';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { TwitterIcon, GitHubIcon, InstagramIcon, FacebookIcon } from './';
import grey from '@material-ui/core/colors/grey';

const useStyles = makeStyles((theme) => ({
  root: {
    background: grey[800],
    color: grey[500],
    position: 'relative',
    padding: theme.spacing(6, 0),
  },
  socialIcons: {
    color: grey[50],
    margin: theme.spacing(0, 1, 1, 1),
    '&:hover': {
      color: grey[500],
      transition: 'all 0.2s ease-in',
    },
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <Container maxWidth="lg">
        <Typography
          variant="subtitle1"
          align="center"
          color="inherit"
          component="p"
        >
          <Link
            color="inherit"
            href="https://github.com/haniichees/news-portal"
            target="_blank"
            rel="noopener noreferrer"
            underline="none"
          >
            <GitHubIcon className={classes.socialIcons} />
          </Link>
          <Link
            color="inherit"
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            underline="none"
          >
            <TwitterIcon className={classes.socialIcons} />
          </Link>
          <Link
            color="inherit"
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            underline="none"
          >
            <InstagramIcon className={classes.socialIcons} />
          </Link>
          <Link
            color="inherit"
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            underline="none"
          >
            <FacebookIcon className={classes.socialIcons} />
          </Link>
        </Typography>
        <Copyrights />
      </Container>
    </footer>
  );
}
