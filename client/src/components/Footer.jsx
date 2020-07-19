import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import {
  Copyrights,
  Developers,
  Container,
  IconButton,
  TwitterIcon,
  GitHubIcon,
  InstagramIcon,
  FacebookIcon,
  Grid,
} from './';
import { Brightness2, Brightness7 } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  footer: {
    background: theme.palette.background.paper,
    position: 'relative',
    padding: theme.spacing(5, 0),
  },
}));
const Footer = ({ themeMode, lightMode, darkMode }) => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="baseline"
        >
          <Grid item xs={6}>
            <Typography color="inherit" component="p" align="center" paragraph>
              <Link
                color="inherit"
                href="https://github.com/haniichees/news-portal"
                target="_blank"
                rel="noopener noreferrer"
                underline="none"
              >
                <IconButton color="inherit" size="small">
                  <GitHubIcon className={classes.socialIcons} />
                </IconButton>
              </Link>
              <Link
                color="inherit"
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                underline="none"
              >
                <IconButton color="inherit" size="small">
                  <TwitterIcon className={classes.socialIcons} />
                </IconButton>
              </Link>
              <Link
                color="inherit"
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                underline="none"
              >
                <IconButton color="inherit" size="small">
                  <InstagramIcon className={classes.socialIcons} />
                </IconButton>
              </Link>
              <Link
                color="inherit"
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                underline="none"
              >
                <IconButton color="inherit" size="small">
                  <FacebookIcon className={classes.socialIcons} />
                </IconButton>
              </Link>
            </Typography>
            <Copyrights />
          </Grid>
          <Grid item xs={6}>
            {themeMode === 'light' ? (
              <Fragment>
                <Typography align="center" paragraph>
                  <IconButton color="inherit" size="small" onClick={darkMode}>
                    <Brightness2></Brightness2>
                  </IconButton>
                </Typography>
                <Typography
                  style={{ textTransform: 'uppercase' }}
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  align="center"
                >
                  <Developers />
                </Typography>
              </Fragment>
            ) : (
              <Fragment>
                <Typography align="center" paragraph>
                  <IconButton color="inherit" size="small" onClick={lightMode}>
                    <Brightness7></Brightness7>
                  </IconButton>
                </Typography>
                <Typography
                  style={{ textTransform: 'uppercase' }}
                  variant="body2"
                  component="p"
                  align="center"
                  color="textSecondary"
                >
                  <Developers />
                </Typography>
              </Fragment>
            )}
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};
export default Footer;
