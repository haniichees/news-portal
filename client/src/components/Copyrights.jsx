import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Link } from './';

const useStyles = makeStyles((theme) => ({
  root: {
    color: 'primary',
  },
}));

export default function Copyrights() {
  const classes = useStyles();

  return (
    <Typography
      className={classes.root}
      variant="body2"
      color="textSecondary"
      align="center"
    >
      {`© `}
      {new Date().getFullYear()}{' '}
      <Link
        href="http://bmstu-kaluga.ru/"
        target="_blank"
        rel="noopener noreferrer"
        color="inherit"
      >
        BMSTU KALUGA
      </Link>
      {` `}
      <Link
        href="https://vk.com/eic5_kb"
        target="_blank"
        rel="noopener noreferrer"
        color="inherit"
      >
        IPS
      </Link>
    </Typography>
  );
}
