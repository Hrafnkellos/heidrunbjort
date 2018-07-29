import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Heart from './media/hjarta.png';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  heart: {
    height: 'calc(100vh - 64px)',
    width: '100%',
    margin: '0 auto',
    marginTop: 64,
    backgroundImage: `url(${Heart})`,
    backgroundPosition: 'center',
    backgroundRepeat:'no-repeat',
    backgroundSize: 'auto 78%',
  },
});

function CenteredGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <div className={classes.heart}></div>
        {/* <img src={Heart}/> */}
      </Grid>
    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);
