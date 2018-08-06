import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    position: 'relative',
    cursor: 'pointer',
  },
  image: {
    width: 360,
  },
  overlay: {
    position: 'absolute',
    top: 12,
    bottom: 12,
    left: 12,
    right: 12,
    height: 360,
    width: 360,
    opacity: 0,
    transition: '0.3s ease',
    backgroundColor: '#F47C7C',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    '&:hover': {
      opacity: 0.8,
      transition: '0.3s ease',
    },
  },
  headingText: {
    color: 'white',
    fontSize: 30,
    fontFamily: 'LemonMilk',
    textAlign: 'center',
  },
  subText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Tinos',
    textAlign: 'center',
  }
});

function MyWorkImage(props) {
  const { classes, img, headingText, subText } = props;

  return (
    <Grid item xs={4} className={classes.root}>
      <img src={img} className={classes.image}/>
      <div className={classes.overlay}>
        <div className={classes.headingText}>{headingText}</div>
        <div className={classes.subText}>{subText}</div>
      </div>
    </Grid>
  );
}

MyWorkImage.propTypes = {
  classes: PropTypes.object.isRequired,
  img: PropTypes.string.isRequired,
  headingText: PropTypes.string.isRequired,
  subText: PropTypes.string.isRequired,
};

export default withStyles(styles)(MyWorkImage);
