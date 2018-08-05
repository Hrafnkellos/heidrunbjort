import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Work1 from './media/work1.png';
import Work2 from './media/work3.png';
import Work3 from './media/work2.png';
import Work4 from './media/work4.png';
import Work5 from './media/work5.png';
import Work6 from './media/work6.png';

const styles = theme => ({
  root: {
    flexGrow: 1,
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
    <div id="work" className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12} style={{textAlign: 'center', fontFamily: 'LemonMilk'}}>
          MY WORK
        </Grid>
        <Grid item xs={12} style={{textAlign: 'center'}}>
          Many different projects that I have worked on
        </Grid>
        <Grid item xs={4} style={{textAlign: 'center'}}>
          <img src={Work1}/>
        </Grid>
        <Grid item xs={4} style={{textAlign: 'center'}}>
          <img src={Work2}/>
        </Grid>
        <Grid item xs={4} style={{textAlign: 'center'}}>
          <img src={Work3}/>
        </Grid>
        <Grid item xs={12} style={{textAlign: 'center'}}>
          <button>MY DRIBBLE ACCOUNT</button>
        </Grid>
      </Grid>
    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);
