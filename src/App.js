import React, { Component } from 'react';
import Header from './Header';
import FrontPage from './FrontPage';
import About from './About';
import MyWork from './MyWork';
import Contact from './Contact';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Header></Header>
        <div style={{maxWidth: 1170, margin: '0 auto'}}>
          <FrontPage></FrontPage>
          <About></About>
          <MyWork></MyWork>
          <Contact></Contact>
        </div>
    </React.Fragment>
    );
  }
}

export default App;
