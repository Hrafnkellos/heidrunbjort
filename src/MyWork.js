import React ,{ Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MyWorkImage from './MyWorkImage'

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 50,
  },
  heading: {
    textAlign: 'center',
    fontFamily: 'LemonMilk',
    fontSize: 35,
    color: '#f47c7c'
  }
});

class MyWork extends Component {
  render() {
    const { classes, work } = this.props;

    return (
      <div id="work" className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12} className={classes.heading}>
            MY WORK
          </Grid>
          <Grid item xs={12} style={{textAlign: 'center', fontFamily: 'Tinos', fontSize: 20, color: '#838383', fontStyle: 'italic'}}>
            Many different projects that I have worked on
          </Grid>
          <Grid  item xs={12} >
            <hr style= {{ border: 'none', height: 2, color: '#f47c7c', backgroundColor: '#f47c7c', width: 103 }}/>
          </Grid>
          {
            work.projects.map(data =>
              <MyWorkImage key={data.name} img={data.img} headingText={data.name} subText={data.description}/>
            )
          }
          <Grid container style={{justifyContent: 'center'}}>
            <Grid item xs={3} style={{margin: '25px 15px'}}>
              <a href="https://dribbble.com/heidrunbjort" target="blank"><button className="red-button">MY DRIBBLE ACCOUNT</button></a>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

MyWork.propTypes = {
  classes: PropTypes.object.isRequired,
  work: PropTypes.object.isRequired,
};

export default withStyles(styles)(MyWork);
