import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  root: {
    minHeight: '85vh'
  },
});

class WorkPage extends Component {
  render() {

    const { classes, match } = this.props;
    return (
      <div className={classes.root}>
        <div>{match.url}</div>
        <div>{match.params.workId}</div>
      </div>
    );
  }
}

WorkPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WorkPage);
