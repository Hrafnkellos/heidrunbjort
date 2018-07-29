import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    flexGrow: 1,
    position: 'fixed',
    width: '100%',
  },
};

function HeidrunAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="title" color="inherit" style={{margin: '0 auto'}}>
            WORK // ABOUT // CONTACT
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
