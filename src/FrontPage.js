import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
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

class FrontPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isHovered: false
    }
    this.handleHover = this.handleHover.bind(this);
  }

  handleHover(){
    this.setState({
      isHovered: !this.state.isHovered
    });
  }

  render() {
    const { classes } = this.props;
    const hoverClass = this.state.isHovered ? " animate" : "";

    return (
      <div className={classes.root}>
        <Grid container spacing={24} className="heart-container">
          <div className={classes.heart + hoverClass} onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}></div>
        </Grid>
      </div>
    );
  }
}

FrontPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FrontPage);
