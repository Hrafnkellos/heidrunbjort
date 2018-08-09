import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Banner from './media/Amarayoga/amarayoga.png';
import Screen from './media/Amarayoga/Amarayoga_comp.png';
import Design from './media/Amarayoga/amarayogaforsida.png';

const styles = () => ({
  root: {
    minHeight: '85vh',
    marginTop: 80,
  },
  image: {
    height: '60vh',
    margin: '0 auto',
    backgroundImage: `url(${Banner})`,
    backgroundPosition: 'center',
    backgroundRepeat:'no-repeat',
    backgroundSize: 'auto 100%',
  },
  heading: {
    textAlign: 'center',
    fontFamily: 'LemonMilk',
    fontSize: 35,
    color: '#f47c7c'
  },
  colorBoxContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  colorBox: {
    height: 100,
    width: 100,
    display: 'inline-block',
    margin: '0 15px'
  }
});

class WorkPage extends Component {

  render() {
    const { classes, match } = this.props;
    return (
      <div>
        <Grid container spacing={24} className={classes.root} justify="center">
          <Grid Item xs="12" className="img-container">
            <div className={classes.image}></div>
          </Grid>
          <Grid Item xs="6" className={classes.heading}>
            Amarayoga website
          </Grid>
          <Grid Item xs="6" >
            <p>I have been going to this very small and inviting yoga station in Hafnarfjörður called Amarayoga. I really like it but I thought that their website was not showing their true colors. Also it was very dated and there were some color problems (dark fonts on dark backgrounds). So I did this project as a hobby and created a new and inviting frontpage for the website.</p>
          </Grid>
          <Grid Item xs="12" className={classes.colorBoxContainer} >
            <div className={classes.colorBox} style={{backgroundColor: '#52246A'}}></div>
            <div className={classes.colorBox} style={{backgroundColor: '#F6F4F7'}}></div>
            <div className={classes.colorBox} style={{backgroundColor: '#F4F4F4'}}></div>
            <div className={classes.colorBox} style={{backgroundColor: '#CBCBCB'}}></div>
          </Grid>
          <Grid container className={classes.colorBoxContainer}>
            <Grid item xs="2">
              <div>Kaushapn Script</div>
              <div>I watched the storm, so beautiful yet terrific.</div>
            </Grid>
            <Grid item xs="2">
              <div>Montserrat, light</div>
              <div>I watched the storm, so beautiful yet terrific.</div>
            </Grid>
            <Grid item xs="2">
              <div>TItillium Web, semibold</div>
              <div>I watched the storm, so beautiful yet terrific.</div>
            </Grid>
          </Grid>
          <Grid Item xs="10">
            <img src={Screen} style={{width: '100%'}}/>
          </Grid>
          <Grid Item xs="10" >
          <img src={Design} style={{width: '100%'}}/>
          </Grid>
        </Grid>
        {/* <div>{match.url}</div>
        <div>{match.params.workId}</div> */}
      </div>
    );
  }
}

WorkPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WorkPage);
