import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import facebookIcon from './media/icon_facebook.png';
import instagramIcon from './media/icon_instagram.png';
import twitterIcon from './media/icon_twitter.png';

const styles = {
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: '#f47c7c',
    marginTop: 75,
    height: 100,
  },
  footerIcons: {
    margin: 'auto',
  },
  icon : {
    margin: '0 10px',
    height: 35,
    cursor: 'pointer'
  },
  container: {
    width: 1138,
    margin: 'auto',
    height: '100%',
  }
};

function HeidrunFooter(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Grid container spacing={24} className={classes.container}>
        <Grid item xs={2} className={classes.footerIcons}>
          <a href="https://www.facebook.com/heidrunbjortsig" target="blank"><img className={classes.icon} src={facebookIcon}/></a>
          <a href="https://www.instagram.com/heidrunbjort/?hl=en" target="blank"><img className={classes.icon} src={instagramIcon}/></a>
          <a href="https://twitter.com/heidrunbjort?lang=en" target="blank"><img className={classes.icon} src={twitterIcon}/></a>
        </Grid>
      </Grid>
    </div>
  );
}

HeidrunFooter.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HeidrunFooter);
