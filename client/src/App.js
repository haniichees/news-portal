import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {
  createMuiTheme,
  ThemeProvider,
  makeStyles,
} from '@material-ui/core/styles';
import {
  Header,
  Main,
  News,
  CssBaseline,
  useScrollTrigger,
  Zoom,
  Fab,
} from './components';
import Footer from './components/Footer';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { grey, amber } from '@material-ui/core/colors';

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
    opacity: 0.8,
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
  const [themeMode, setThemeMode] = useState('dark');

  const handleDarkMode = () => {
    setThemeMode('dark');
  };
  const handleLightMode = () => {
    setThemeMode('light');
  };

  const darkTheme = createMuiTheme({
    palette: {
      type: 'dark',
      secondary: {
        main: amber[800],
      },
      background: {
        default: grey[900],
      },
    },
  });
  const lightTheme = createMuiTheme({
    palette: {
      type: 'light',
      secondary: {
        main: amber[800],
      },
      background: {
        default: grey[50],
      },
    },
  });

  return (
    <ThemeProvider theme={themeMode === 'light' ? lightTheme : darkTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/news/id" component={News} />
        </Switch>
        <Footer
          themeMode={themeMode}
          darkMode={handleDarkMode}
          lightMode={handleLightMode}
        />
      </BrowserRouter>
      <ScrollTop className={classes.scrollToTopButton}>
        <Fab size="small" aria-label="scroll back to top" color="secondary">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </ThemeProvider>
  );
}
