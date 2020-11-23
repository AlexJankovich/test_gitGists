import ThemeProvider from '@material-ui/styles/ThemeProvider';
import { NextPage } from 'next/types';
import Router, { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar/AppBar';
import Grid from '@material-ui/core/Grid/Grid';
import Toolbar from '@material-ui/core/Toolbar/Toolbar';
import { Button, Container, CssBaseline, Paper } from '@material-ui/core';
import { theme, themeGlobal } from '../UiTheme/Theme';

export interface DashboardProps {}

const Dashboard: NextPage<DashboardProps> = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    if (router.pathname === '/') {
      Router.push('/gists');
    }
  }, [router.pathname]);

  return (
    // <ThemeProvider theme={theme}> custom theme, <ThemeProvider theme={themeGlobal}> globalOverrides
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Grid
            direction={'row'}
            justify={'center'}
            container
            spacing={5}
            xl={12}
          >
            <Grid item>
              <Button
                onClick={() => Router.push('/gists')}
                variant={'contained'}
                color={router.pathname === '/gists' ? 'default' : 'secondary'}
              >
                Gists
              </Button>
            </Grid>
            <Grid item>
              <Button
                onClick={() => Router.push('/orgs')}
                variant={'contained'}
                color={router.pathname === '/orgs' ? 'default' : 'secondary'}
              >
                Orgs
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg">
        <Paper style={{ margin: '5vh 0' }} elevation={10}>{children}</Paper>
      </Container>
    </ThemeProvider>
  );
};

export default Dashboard;
