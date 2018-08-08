import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import 'typeface-montserrat';

const styles = {
  root: {
    flexGrow: 1,
    position: 'fixed',
    width: '100%',
    top: 0,
  },
  appBar: {
    boxShadow: 'none'
  },
};

function HeidrunAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="title" className="menu" color="inherit" style={{margin: '0 auto', fontSize: 15, color: '#605f5f'}}>
            <a href="/#work">WORK</a> // <a href="/#about">ABOUT</a> // <a href="/#contact">CONTACT</a>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

HeidrunAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HeidrunAppBar);
