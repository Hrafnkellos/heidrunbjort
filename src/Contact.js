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
        <hr style= {{ border: 'none', height: 2, color: '#f47c7c', backgroundColor: '#f47c7c', width: 103 , marginBottom: 40}}/>
        <Grid container className="contact-form">
          <Grid item xs={12} style={{textAlign: 'center'}}>
            <input type="text" placeholder="Name"></input>
          </Grid>
          <Grid item xs={12} style={{textAlign: 'center'}}>
            <input type="text" placeholder="Email"></input>
          </Grid>
          <Grid item xs={12} style={{textAlign: 'center'}}>
            <input type="text" placeholder="Subject"></input>
          </Grid>
          <Grid item xs={12} style={{textAlign: 'center'}}>
            <textarea placeholder="Say Something here..."></textarea>
          </Grid>
          <Grid item xs={12} style={{textAlign: 'center'}}>
            <button className="white-button">SEND</button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);
