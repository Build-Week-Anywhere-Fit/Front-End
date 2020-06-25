import React, { useState } from 'react';
import { Switch, Route} from 'react-router-dom'
import { Udash, Client,  ClientSignup, Idash, Nav} from './components';
import { PrivateRoute } from './utils';
// import {StyledHeader, StyledDiv, StyledImgDiv} from './styles/StyledClient'
import logo from './UI/Alex/assets/logo.svg'
import wClass from './styles/wClass.jpeg'
import wClass2 from './styles/wClass2.jpeg'
import { Box } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import { connect } from 'react-redux';
import { useStyles } from './styles/materialUi';

function App() {
  const classes = useStyles();
  const getLogo = () => {
    if(logo){
      return (<img id='logo' src={logo} alt='logo'/>)
    }else {
      return (<div></div>)
    }
  }
  return (
    <React.Fragment>
    <div className={classes.root}>
      <Box className={`${classes.offset} ${classes.content}`}>
        <Nav/>
          <Switch>
            {/* Regular Routes */}
            <Route exact path='/login' component={Client} />
            <Route exact path='/signup' component={ClientSignup}/>
            <Route exact path='/'/>
            {/* Protected Routes */}
            <PrivateRoute exact path="/dashboard" Udash={Udash} Idash={Idash}/>
          </Switch>
      </Box>
    </div>
    </React.Fragment>
  );
}


const mapStateToProps = (state) => {
  return {
      loggedIn: state.loggedIn
  }
}
export default connect(mapStateToProps,{  })(App)