import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';

export const Preloader = () => {
  return (
    <Grid container justify="center">
      <div style={{ height: '100vh', display: 'flex', alignItems: 'center' }}>
        <CircularProgress size={200} />
      </div>
    </Grid>
  );
};
