import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  root: {
  },
});

class WorkPage extends Component {
  render() {

    const { classes } = this.props;
    return (
      <div className={classes.root}>
      </div>
    );
  }
}

WorkPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WorkPage);
