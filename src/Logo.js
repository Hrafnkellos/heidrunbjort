import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import logo from './media/logo.png';

const styles = () => ({
  root: {
    position: 'fixed',
    top: 0,
    left: 0,
    height: 50,
    width: 50,
  },
  img: {
    height: '100%',
  }
});

class Logo extends Component {
  render() {

    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <img src={logo} className={classes.img}/>
      </div>
    );
  }
}

Logo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Logo);
