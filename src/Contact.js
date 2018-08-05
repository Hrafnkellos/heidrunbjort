import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 50,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function CenteredGrid(props) {
  const { classes } = props;

  return (
    <div id="contact" className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12} style={{textAlign: 'center', fontFamily: 'LemonMilk', fontSize: 35, color: '#f47c7c'}}>
          CONTACT ME
        </Grid>
        <Grid item xs={12} style={{textAlign: 'center', fontFamily: 'Tinos', fontSize: 20, color: '#838383', fontStyle: 'italic'}}>
          Feel free to ask me anything or even offer me a job
        </Grid>
        <Grid item xs={12} style={{textAlign: 'center'}}>
          Name
        </Grid>
        <Grid item xs={12} style={{textAlign: 'center'}}>
          Email
        </Grid>
        <Grid item xs={12} style={{textAlign: 'center'}}>
          Subject
        </Grid>
        <Grid item xs={12} style={{textAlign: 'center'}}>
          Say Something here...
        </Grid>
        <Grid item xs={12} style={{textAlign: 'center'}}>
          <button>SEND</button>
        </Grid>
      </Grid>
    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);
