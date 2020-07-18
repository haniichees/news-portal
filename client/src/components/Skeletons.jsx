import React, { Fragment } from 'react';
import { Skeleton } from './';
import Grid from '@material-ui/core/Grid';

export default function Skeletons() {
  return (
    <Fragment>
      <Grid item xs={12} md={6} lg={6} xl={6}>
        <Skeleton animation="wave" variant="rect" width="auto" height="30vh" />
        <Skeleton variant="text" animation="wave" height="7vh" />
        <Skeleton variant="text" animation="wave" height="4vh" />
      </Grid>
      <Grid item xs={12} md={6} lg={6} xl={6}>
        <Skeleton animation="wave" variant="rect" width="auto" height="30vh" />
        <Skeleton variant="text" animation="wave" height="7vh" />
        <Skeleton variant="text" animation="wave" height="4vh" />
      </Grid>
      <Grid item xs={12} md={6} lg={6} xl={6}>
        <Skeleton animation="wave" variant="rect" width="auto" height="30vh" />
        <Skeleton variant="text" animation="wave" height="7vh" />
        <Skeleton variant="text" animation="wave" height="4vh" />
      </Grid>
      <Grid item xs={12} md={6} lg={6} xl={6}>
        <Skeleton animation="wave" variant="rect" width="auto" height="30vh" />
        <Skeleton variant="text" animation="wave" height="7vh" />
        <Skeleton variant="text" animation="wave" height="4vh" />
      </Grid>
    </Fragment>
  );
}
