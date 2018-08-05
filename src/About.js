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
      <Grid container spacing={32}>
        <Grid item xs={12} style={{textAlign: 'center', fontFamily: 'LemonMilk', fontSize: 35, color: '#f47c7c'}}>
          ABOUT ME
        </Grid>
        <Grid item xs={12} style={{textAlign: 'center', fontFamily: 'Tinos', fontSize: 20, color: '#838383', fontStyle: 'italic'}}>
          My life, my career and education
        </Grid>
        <hr style= {{  border: 'none', height: 2, color: '#f47c7c', backgroundColor: '#f47c7c', width: 103 }}/>
        <Grid item xs={12} style={{textAlign: 'center'}}>
          <img src={Profile} style={{width: 140}}/>
        </Grid>
        <Grid  item xs={1}>
        </Grid>
        <Grid item xs={5} style={{fontFamily: 'Montserrat'}}>
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
        <Grid item xs={5} style={{fontFamily: 'Montserrat'}}>
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
          <img src={Signature} style={{width: 285}}/>
        </Grid>
        <Grid container xs={12} style={{justifyContent: 'center'}}>
          <Grid item xs={2} style={{margin: '0 15px'}}>
            <button className="pink-button">MY RESUME</button>
          </Grid>
          <Grid item xs={2} style={{margin: '0 15px'}}>
            <button className="red-button">HIRE ME</button>
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
