import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

export default function Footer() {
    return (
        <AppBar position="static" color="default">
          <Container maxWidth="sm">
            <Toolbar>
              <Typography variant="body1" color="inherit">
                © 2021 Electronics Hackathon Designed by <a href="mailto: singhgursidak89@gmail.com"> Gursidak_Singh </a> 
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
    )
}