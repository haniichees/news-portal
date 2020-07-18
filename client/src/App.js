import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {
  createMuiTheme,
  ThemeProvider,
  makeStyles,
} from '@material-ui/core/styles';
import { CssBaseline } from './components';
import { Header, Main, Footer, News } from './components';
import { useScrollTrigger } from './components';
import { Zoom } from './components';
import { Fab } from './components';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { grey } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  newsContainer: {
    padding: theme.spacing(0, 4, 4, 4),
    minHeight: '70vh',
  },
  scrollToTopButton: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    zIndex: '99999',
    opacity: 0.9,
  },
}));

function ScrollTop(props) {
  const { children } = props;
  const classes = useStyles();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor'
    );
    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div
        onClick={handleClick}
        role="presentation"
        className={classes.scrollToTopButton}
      >
        {children}
      </div>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
};

export default function App() {
  const classes = useStyles();

  const theme = createMuiTheme({
    overrides: {
      MuiCssBaseline: {
        '@global': {
          body: {
            WebkitFontSmoothing: 'auto',
            backgroundColor: grey[900],
            color: grey[300],
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/news/id" component={News} />
        </Switch>
        <Footer />
      </BrowserRouter>
      <ScrollTop className={classes.scrollToTopButton}>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </ThemeProvider>
  );
}
