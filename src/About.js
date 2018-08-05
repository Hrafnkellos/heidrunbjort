import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Profile from './media/aboutmynd.png';
import Signature from './media/undirskrift.png';

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
    <div id="about" className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12} style={{textAlign: 'center', fontFamily: 'LemonMilk'}}>
          ABOUT ME
        </Grid>
        <Grid item xs={12} style={{textAlign: 'center'}}>
          My life, my career and education
        </Grid>
        <Grid item xs={12} style={{textAlign: 'center'}}>
          <img src={Profile}/>
        </Grid>
        <Grid item xs={6} style={{}}>
          <p>
            My name is Heiðrún Björt and I come from Iceland. I live in
            my apartment in Hafnarfjörður with my man, Hrafnkell,
            and my two cats, Villimey and Rökkvi.
          </p>
          <p>
            I have a journeyman in graphic media design and
            diploma in web development. I'm very interested in web
            design and everything that is related to UX/UI. I work with
            Sketch, Indesign, Photoshop, Illustrator, Invision and more.
          </p>
        </Grid>
        <Grid item xs={6} style={{}}>
          <p>
            I've worked at various places as a graphic media designer,
            at a media, advertisement agency and a small printing
            office and I’ve also done a lot of freelance work. I studied
            design and took courses in drawing, ceramics and more.
          </p>
          <p>
            In my free time I sing in a choir named Mótettukór
            Hallgrímskirkju. I enjoy playing a little ukulele, knitting
            sweaters, travelling and more.
          </p>
        </Grid>
        <Grid item xs={12} style={{textAlign: 'center'}}>
          <img src={Signature}/>
        </Grid>
        <Grid item xs={12} style={{textAlign: 'center'}}>
          <button>MY RESUME</button>
          <button>HIRE ME</button>
        </Grid>
      </Grid>
    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);
