import React from 'react'
import {BrowserRouter as Router, Route  } from 'react-router-dom'
import VideoGames from '../pages/video/VideoGames'
import Contact from '../pages/contact/Contact'
import Header from '../components/header/Header'
const drawerWidth = 240

const Routes = props => {
  const { classes } = props
  return (
    <Router>
    <Header />
    <Route exact path="/">
      <VideoGames />
    </Route>
    <Route path="/contact">
      <Contact />
    </Route>
  </Router> 
  )
}

export default Routes;

