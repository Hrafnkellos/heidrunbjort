import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MyWorkImage from './MyWorkImage'
import Work1 from './media/work1.png';
import Work2 from './media/work3.png';
import Work3 from './media/work2.png';
import Work4 from './media/work4.png';
import Work5 from './media/work5.png';
import Work6 from './media/work6.png';

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

  const imageData = {
    projects: [
      {
        name: 'Amarayoga',
        description: 'desktop, hobby project',
        img: Work1,
      },
      {
        name:'TouringIceland',
        description:'desktop and mobile, school project',
        img: Work2,
      },
      {
        name:'Dashboard',
        description:'desktop, school project',
        img: Work3,
      },
      {
        name:'Travelf',
        description:'mobile, travel hackathon',
        img: Work4,
      },
      {
        name:'Fjallraven',
        description:'desktop, school project',
        img: Work5,
      },
      {
        name:'Reykjavík',
        description:'desktop, school project',
        img: Work6,
      },
    ]
  }

  const { classes } = props;

  return (
    <div id="work" className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12} style={{textAlign: 'center', fontFamily: 'LemonMilk', fontSize: 35, color: '#f47c7c'}}>
          MY WORK
        </Grid>
        <Grid item xs={12} style={{textAlign: 'center', fontFamily: 'Tinos', fontSize: 20, color: '#838383', fontStyle: 'italic'}}>
          Many different projects that I have worked on
        </Grid>
        <Grid  item xs={12} >
          <hr style= {{ border: 'none', height: 2, color: '#f47c7c', backgroundColor: '#f47c7c', width: 103 }}/>
        </Grid>
        {
          imageData.projects.map(data =>
            <MyWorkImage img={data.img} headingText={data.name} subText={data.description}/>
          )
        }
        <Grid container xs={12} style={{justifyContent: 'center'}}>
          <Grid item xs={3} style={{margin: '25px 15px'}}>
            <a href="https://dribbble.com/heidrunbjort" target="blank"><button className="red-button">MY DRIBBLE ACCOUNT</button></a>
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
