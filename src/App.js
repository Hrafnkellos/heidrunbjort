import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import FrontPage from './FrontPage';
import About from './About';
import MyWork from './MyWork';
import Contact from './Contact';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './App.css';
import Logo from './Logo';

const theme = createMuiTheme({
  palette: {
    type: 'light',
    background: 'white',
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#ffffff',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#0066ff',
      main: '#0044ff',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00',
    },
    // error: will use the default color
  },
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      'tinos',
      'montserrat',
    ].join(','),
  }
});

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Header></Header>
        <Logo></Logo>
        <div style={{maxWidth: 1138, margin: '0 auto'}}>
          <FrontPage></FrontPage>
          <About></About>
          <MyWork></MyWork>
          <Contact></Contact>
        </div>
        <Footer></Footer>
        </MuiThemeProvider>
    </React.Fragment>
    );
  }
}

export default App;
